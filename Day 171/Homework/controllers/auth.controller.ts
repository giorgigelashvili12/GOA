import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import {Request, Response} from 'express';

import sendEmail from '../services/email.service.js';
import pushUser from '../services/brevo.service.js';

import {Merchant} from '../models/Merchant.js';
import { LoginEvent } from '../models/LoginEvents.js';
// User

// Manual Services
import getFingerprint from '../utils/fingerprint.js';
import { getLocation } from '../utils/location.js';
import { isLoginNew, saveLoginEvent } from '../services/loginEvent.service.js';
import {loginAlert} from '../services/email.service.js';

dotenv.config();

const JWT = process.env.JWT;

const signup = async (req: Request, res: Response): Promise<void> => {
    const { email, password, legalName } = req.body;

    if (!email || !password || !legalName) {
        res.status(400).json({ msg: 'Missing required fields' });
        return;
    }

    try {
        const exists = await Merchant.findOne({ email });
        if (exists) {
            res.status(400).json({ msg: 'User with this email already exists' });
            return;
        }

        const hash: string = bcrypt.hashSync(password, 8);
        const emailToken = crypto.randomBytes(32).toString('hex');

        const merchant = new Merchant({
            id: crypto.randomUUID(),
            email,
            password: hash,
            legalName,
            businessType: 'individual',
            isEmailVerified: false,
            verificationStatus: 'pending',
            emailVerificationToken: emailToken,
            subscriptionLevel: 'trial',
            createdAt: new Date(),
        });

        await merchant.save();

        await sendEmail(
            email,
            "Verify your email",
            `<h1>Verify your email</h1>
      <p>Click the link below to verify your email:</p>
      <a href="http://localhost:5173/verify?token=${emailToken}">Verify Email</a>`
        );

        const token: string = jwt.sign(
            { id: merchant._id, email: merchant.email },
            JWT as string,
            { expiresIn: '24h' }
        );

        res.cookie('hs', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: 86400000,
            priority: 'high',
            partitioned: true,
        });

        res.json({
            status: 'success',
            msg: 'User created successfully. Please verify your email.',
            user: { id: merchant._id, email: merchant.email }
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(500).json({ msg: 'Error creating user', err: e.message });
        } else {
            res.status(500).json({ msg: 'Unknown error occurred during signup' });
        }
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await Merchant.findOne({ email });
        if (!user) {
            res.status(404).json({ msg: 'User not found or invalid credentials were provided.' });
            return;
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            res.status(401).json({ msg: 'Invalid credentials' });
            return;
        }

        if (!user.isEmailVerified) {
            const token = jwt.sign({ id: user._id, email: user.email }, JWT as string, { expiresIn: '24h' });
            res.cookie('hs', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 86400000,
                priority: 'high',
                partitioned: true,
            });

            res.status(200).json({
                status: 'testing_mode',
                msg: 'Welcome! Your account is unverified. Please complete your profile to gain full access.',
                user: { id: user._id, email: user.email }
            });
            return;
        }

    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(500).json({ msg: 'Error logging user', err: e.message });
            return;
        }
    }
};

const logout = (req: Request, res: Response) => {
    res.clearCookie('hs');
    res.status(200).json({msg: 'Logout successfully.'});
}

const verifyEmail = async (req: Request, res: Response): Promise<void> => {
    const { token } = req.query;

    if (!token || typeof token !== 'string') {
        res.status(400).json({ msg: 'Missing or invalid token' });
        return;
    }

    try {
        const merchant = await Merchant.findOne({ emailVerificationToken: token });

        if (!merchant) {
            const maybeVerified = await Merchant.findOne({ isEmailVerified: true });
            if (maybeVerified) {
                res.status(409).json({ msg: 'This email is already verified.' });
                return;
            }
            res.status(400).json({ msg: 'Invalid or expired token.' });
            return;
        }

        if (merchant.isEmailVerified) {
            res.status(409).json({ msg: 'Email already verified.' });
            return;
        }

        merchant.isEmailVerified = true;
        merchant.emailVerificationToken = null;
        merchant.verificationStatus = 'pending';

        await merchant.save();

        await sendEmail(
            merchant.email,
            "Email Verified ✔️",
            `<h1>Welcome, ${merchant.legalName}!</h1>
       <p>Your email has been verified.</p>
       <p>Your account is now under review. We’ll let you know once it’s approved ✅</p>`
        );

        res.status(200).send('Email verified, access granted');
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong. Try again later.' });
    }
};
export { signup, login, logout, verifyEmail };