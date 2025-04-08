import express from 'express'

const PORT = 4000
const app = express();

const DATA = {}

app.get('/api/movie-data', (req, res) => {
    try {
        return res.status(200).json(DATA);
    } catch(e) {
        return e, e.message
    }
});

app.post('api/movie-create', (req, res) => {
    try {
        const { title, year, rating } = req.body;
        const id = new Date().getTime();
        DATA[id] = { title, year, rating };
        return res.status(201).json({ id });
    } catch(e) {
        return e, e.message
    }
});

app.delete('/api/movie-delete/:id', (req, res) => {
    try {
        const {id} = req.params;
        delete DATA[id];
        return res.status(200).json({ msg: 'Movie deleted' });
    } catch(e) {
        return e, e.message
    }
});

app.listen(PORT, () => console.log('App running on port', PORT));