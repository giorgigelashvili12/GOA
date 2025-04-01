import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    comments: String,
    author: String,
    img: String
});

export default mongoose.model('Post', PostSchema);