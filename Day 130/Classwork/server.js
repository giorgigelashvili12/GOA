const express = require('express');
const path = require('path');

app.use(express.static());

const app = express();
const port = 27017;

app.get('/', (req, res) => {
    res.status(201).send(path.resolve(__dirname, './index.html'));
});
app.all('*', (req, res) => {
    res.status(404).send(path.resolve(__dirname, './404.html'));
})
app.post('/message', (req, res) => {
    let text = req.body;
    console.log(text);
});

app.listen(port)