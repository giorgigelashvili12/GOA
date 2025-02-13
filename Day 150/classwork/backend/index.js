const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
const User = require('./models/user.mdoel.js');

app.get('/user', (req, res) => {
    try {
        res.status(200).json(User);
    } catch(e) {
        res.status(500).json(e);
    }
});

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connection.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}

app.listen(3000, () => console.log('App listening on port', 3000), connectDB());