import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import {Request, Response} from 'express';

import {Merchant} from '../models/Merchant';
// User

dotenv.config();

const JWT = process.env.JWT;

const signup = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: { email: string; password: string } = req.body;

    try {
        const exists = await Merchant.findOne({ email });
        if (exists) {
            res.status(400).json({ msg: 'User with this email already exists' });
            return;
        }

        const hash: string = bcrypt.hashSync(password, 8);
        const emailToken = crypto.randomBytes(32).toString('hex');

        const merchant = new Merchant({
            email,
            password: hash,
            emailVerificationToken: emailToken,
            isEmailVerified: false,
        });

        await merchant.save();

        const token: string = jwt.sign(
            { id: merchant._id, email: merchant.email },
            JWT as string,
            { expiresIn: '24h' }
        );

        res.cookie('hs', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
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
        return;
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: { email: string; password: string } = req.body;

    try {
        const user = await Merchant.findOne({ email });
        if (!user) {
            res.status(404).json({ msg: 'User not found or invalid credentials were provided.' });
            return;
        }

        if(!user.isEmailVerified) {
            res.status(403).json({msg: 'Please verify your email verification token.'});
            return;
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            res.status(401).json({ msg: 'Invalid credentials' });
            return;
        }

        const token: string = jwt.sign({ id: user._id, username: user.email }, JWT as string, { expiresIn: '24h' });
        res.cookie('hs', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 86400000,
            priority: 'high',
            partitioned: true,
        });

        res.json({
            status: 'success',
            msg: 'User logged in successfully.',
            user: { id: user._id, email: user.email }
        });
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
    const {token} = req.query;

    if(!token || typeof token !== 'string') {
        res.status(400).json({ msg: 'Invalid token' });
        return;
    }

    try {
        const merchant = await Merchant.findOne({emailVerificationToken: token});
        if (!merchant) {
            res.status(400).json({ msg: 'Invalid token' });
            return;
        }

        merchant.isEmailVerified = true;
        merchant.emailVerificationToken = null;
        await merchant.save();

        res.send('email verified, access granted');
    } catch(e) {
        console.error(e);
        res.status(500).json({msg: 'Something went wrong. Try again later.'});
    }
}

export { signup, login, logout, verifyEmail };