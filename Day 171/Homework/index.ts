import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrf from 'csurf';

import authRoutes from './routes/auth.routes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = 5001;

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const csrfProtection = csrf({
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    },
});

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    console.log('Root route hit');
    res.send('Server alive');
});

app.get('/csrf-token', csrfProtection, (req: Request, res: Response) => {
    res.cookie('XSRF-TOKEN', req.csrfToken(), {
        httpOnly: false,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    });
    res.json({ csrfToken: req.csrfToken() });
});

const run = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

// @ts-ignore
run();