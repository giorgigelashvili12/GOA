import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import sendEmail from '../services/emailer';
import { Merchant } from '../models/Merchant';
// User
dotenv.config();
const JWT = process.env.JWT;
const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const exists = await Merchant.findOne({ email });
        if (exists) {
            res.status(400).json({ msg: 'User with this email already exists' });
            return;
        }
        const hash = bcrypt.hashSync(password, 8);
        const emailToken = crypto.randomBytes(32).toString('hex');
        const merchant = new Merchant({
            email,
            password: hash,
            emailVerificationToken: emailToken,
            isEmailVerified: false,
        });
        await merchant.save();
        await sendEmail(email, "Verify your email", `<h1>Verify your email</h1>
            <p>Click the link below to verify your email:</p>
            <a href="http://localhost:5173/verify?token=${emailToken}">Verify Email</a>`);
        const token = jwt.sign({ id: merchant._id, email: merchant.email }, JWT, { expiresIn: '24h' });
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
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(500).json({ msg: 'Error creating user', err: e.message });
        }
        else {
            res.status(500).json({ msg: 'Unknown error occurred during signup' });
        }
        return;
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Merchant.findOne({ email });
        if (!user) {
            res.status(404).json({ msg: 'User not found or invalid credentials were provided.' });
            return;
        }
        if (!user.isEmailVerified) {
            res.status(403).json({ msg: 'Please verify your email verification token.' });
            return;
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            res.status(401).json({ msg: 'Invalid credentials' });
            return;
        }
        const token = jwt.sign({ id: user._id, username: user.email }, JWT, { expiresIn: '24h' });
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
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(500).json({ msg: 'Error logging user', err: e.message });
            return;
        }
    }
};
const logout = (req, res) => {
    res.clearCookie('hs');
    res.status(200).json({ msg: 'Logout successfully.' });
};
const verifyEmail = async (req, res) => {
    const { token } = req.query;
    if (!token || typeof token !== 'string') {
        res.status(400).json({ msg: 'Invalid token' });
        return;
    }
    try {
        const merchant = await Merchant.findOne({ emailVerificationToken: token });
        if (!merchant) {
            res.status(400).json({ msg: 'Invalid token' });
            return;
        }
        merchant.isEmailVerified = true;
        merchant.emailVerificationToken = null;
        if (!merchant.verificationStatus || merchant.verificationStatus === "pending") {
            merchant.verificationStatus = "pending";
        }
        await merchant.save();
        await sendEmail(merchant.email, "Email Verified ✔️", `<h1>Welcome, ${merchant.legalName}!</h1>
             <p>Your email has been verified.</p>
             <p>Your account is now under review. We’ll let you know once it’s approved ✅</p>`);
        res.send('Email verified, access granted');
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Something went wrong. Try again later.' });
    }
};
export { signup, login, logout, verifyEmail };
