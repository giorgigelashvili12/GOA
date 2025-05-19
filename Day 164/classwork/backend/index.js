import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import connDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`app runnin on http://localhost:${PORT}`);
    connDB();
});