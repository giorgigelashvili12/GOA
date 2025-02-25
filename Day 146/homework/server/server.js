const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const fp = './user.json';

app.get('/', (req, res) => {
    res.send('Welcome to Facebook');
});

app.post('/user', (req, res) => {
    fs.writeFile(fp, JSON.stringify(req.body), (e) => {
        if(e) return res.status(500).json({err: 'Error Wriitng File', data: e});
        res.json(201).json({msg: 'Created', data: {}});
    })
})

app.get('/user', (req, res) => {
    fs.readFile(fp, 'utf8', (e, d) => {
        if(e) return res.status(500).json({err: 'Error reading file', data: e});
        res.json(200).json({msg: '', data: {}});
    });
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));