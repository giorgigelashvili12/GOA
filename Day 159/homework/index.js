import express from 'express';

const app = express();

const songs = [
    {
        id: 1,
        song: 'No Limit',
        author: '2 Unlimited'
    }
];

app.get('/songs', (req, res) => {
    res.json(songs);
});

app.post('/song', (req, res) => {
    songs.push({
        id: req.song.id,
        song: req.body.song,
        author: req.body.author
    });
    res.status(200).json({status: 'success'});
})

app.listen(3000, () => console.log('App running on http://localhost:3000'));