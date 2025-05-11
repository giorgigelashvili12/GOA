const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use((req, res, next) => {
    try {
    console.log("lomi")
    } catch (err) {
        console.log(err)
    }
    next()
});

app.get('/', (req, res) => {
    res.send('howdy');
})

app.listen(3000, () => console.log('Server is running on port 3000'));