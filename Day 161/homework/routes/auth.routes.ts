import {signup, login, logout, verifyEmail} from '../controllers/auth.controller';

import express from "express";

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify-email', verifyEmail)

export {router as authRoutes};