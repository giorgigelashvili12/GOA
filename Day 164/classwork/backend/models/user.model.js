import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    role: {
        type: String,
        enum: ['customer', 'merchant', 'admin'],
        default: 'customer'
    }
});

export const User = mongoose.model('User', userSchema);