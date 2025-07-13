import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI ?? '');
        console.log('DB Connected to', connection.connection.host);
    } catch (e) {
        console.error('DB failed to connect:', e);
    }
};

export default connectDB;