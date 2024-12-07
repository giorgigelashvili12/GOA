/* 
1) ააგეთ სერვერი დღეს მიერ ნასწავლი მასალთ
2) შექმნით /about ---ექცია
3) შექმნით /homepage
4) შექმნით /homepage ში .end() ში <a> anchor tag სასდაც 
გადავიყვანს სხვადასხვა ფეიჯევბზე
5) შექმნით fileSystem 20 file სადაც ქიენაბ სხვადასხვა მნიშნგველობები
რენდომად მაგალთად "გამარჯობა" / "სალამი: და 
ასეშედგე 5 სხვდასახვა სიტყვით სხვადასხვა წინანადები შექმენით 
*/

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const { readFileSync } = require('fs');
// const http = require('http');

const app = express();
const port = 3301;

const URI = 'mongodb://localhost:27017';
const database = 'playgroundDB';
const collectionName = 'students';
const client = new MongoClient(URI);

const notFound = readFileSync('./404.html');
const about = readFileSync('./about.html');

// const server = http.createServer();

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.json());

app.get('/', (req, res) => {
  if(res.status(404)) {
    res.write(notFound);
  } else {
    res.status(200).send('Server is running');
  }
});

app.get('/about', (req, res) => {
    if(res.status(404)) {
        res.write(notFound);
    } else {
        res.write(about);
        res.status(200).send('About Pge');
    }
})

app.post('/addUser', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection(collectionName);

    const newUser = req.body;

    if (!newUser.name || !newUser.age || !newUser.email) {
      return res.status(400).send('invalid user');
    }

    const result = await collection.insertOne(newUser);
    console.log('Hello,', result, '!');

    res.status(200).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error('Error adding user! ', err);
    res.status(500).send('error adding user');
  } finally {
    await client.close();
  }

  if(res.status(404)) {
    res.write(notFound);
  }
});

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
