import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const URI = process.env.MONGO_URI;

const connDB = async () => {
    try {
        const conn = await mongoose.connect(URI);
        console.log('db connected');
    } catch(e) {
        console.error(e, e.message);
    }
}

export default connDB;