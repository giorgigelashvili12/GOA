const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    try {
        console.log('Making a request... ', req);
    } catch(e) {
        console.log(e, e.message, e.stack)
    }
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});