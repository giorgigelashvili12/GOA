const express = require('express');
const mongoose = require('mongoose');

const car = require('./routes/car.js');

const app = express();

app.use('/api/car', car);

app.get('/', (req, res) => {
    res.send('Toyota.ge');
});

app.listen(3000, () => console.log('app listening on port 3000'));