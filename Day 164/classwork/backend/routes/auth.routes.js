import {Router} from 'express';
import {signup, login, logout, loadProfile} from '../controllers/auth.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authMiddleware, loadProfile);

export default router; 