const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const DATA = '/data';

const read = () => {
    let data = {};

    fs.readdirSync(DATA).forEach(f => {
        let fp = path.join(DATA, f);
        let fc = fs.readFileSync(fp, 'utf-8');

        data[f] = fc;
    });

    return data;
}

app.get('/', (req, res) => {
    try {
        let data= read();
        res.json(data);
    } catch(e) {
        res.status(500).json({msg: 'error reading data'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})