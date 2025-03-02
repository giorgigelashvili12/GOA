const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connection.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(env.process.PORT, () => console.log('Server is running on port: ', env.process.PORT, connectDB()));