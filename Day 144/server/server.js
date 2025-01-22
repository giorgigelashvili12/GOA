require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const user = require('./routers.js');

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/api/user', user);

app.get('/', (req, res) => {
    res.send('helooo :-)')
})

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connection.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}

const PORT = process.env.PORT; 
console.log(`App Running On http:localhost:${PORT}`);
app.listen(PORT, () => console.log(`App Running On http://localhost:${PORT}`), connectDB());