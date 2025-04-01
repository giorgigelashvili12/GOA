import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'

import PostSchema from './models/post.model.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("err", err, err.message));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.send('hello')
});

app.post('/send-post', async (req, res) => {
    try {
        console.log("Received Body:", req.body);
        const post = new PostSchema(req.body);
        await post.sace()
        res.status(201).json({msg: 'post sent!', data: post});
    } catch(e) {
        res.status(500).json({msg: 'err', data:[e, e.message]})
    }
})

app.use('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => console.log('http://localhost:3000'));