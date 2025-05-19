const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

let temp;
let tempPass;

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const hashed = await bcrypt.hash(password);
        tempPass = hashed;
        temp = username;
        res.render('index.ejs', { name: `${username} (Bwt want me to leak yo password?)` });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

app.get('/', (req, res) => {
    res.render('index.ejs', { name: temp });
});

app.listen(3000, () => console.log('server running on port 3000'));