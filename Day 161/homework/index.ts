// App code might seem advacned but is from my another project I started and contains my work only

import express from 'express';

import {authRoutes} from './routes/auth.routes';

const app = express();

app.use(express.json());
app.use(authRoutes, '/api/auth');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});