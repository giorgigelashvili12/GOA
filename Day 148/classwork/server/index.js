import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/user', (req, res) => {
    try {
        res.status(200);
    } catch(e) {
        res.status(500).json(e);
    }
});

app.listen(3000, () => console.log('App listening on port', 3000));