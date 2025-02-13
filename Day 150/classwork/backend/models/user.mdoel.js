import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    user: String,
    address: String
})
const User = mongoose.model('User', userSchema);

export default User;