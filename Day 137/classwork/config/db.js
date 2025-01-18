import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connect.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}