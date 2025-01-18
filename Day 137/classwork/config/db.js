import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connection.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}