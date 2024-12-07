const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');
const winston = require('winston');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);
const database = 'goaWorkspace';
const collection = 'data';

const logger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.File({ file: 'error.log', }),
    ],
})

async function run() {
    try {
        await client.connect();
        console.log('Conected :DDDDDD');

        const db = client.db(database);
        const dbCollection = database.collection(collection);

        const result = await collection.insertOne({ day: 125 });
    } catch(err) {
        console.error('Cant connect');
    } finally {
        await client.close();
    }
};

app.get('/', (req,res) => {
    res.status(200).send('Home page');
});

const server = http.createServer((req, res) => {
    res.end('Studying HTTP');
});

server.listen(5000);