const express = require('express');

const sample = [
    'nigeria baus',
    'finding water',
    'why programming is fun thanks for watching the video',
    'i am a software engineer, yes i earn a lot, no i am not happy',
];

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/film', (req, res) => {
    res.json(sample.map((name, index) => ({ name, id: index })));
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});