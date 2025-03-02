const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db.js');

const app = express();

const { User, Product, Order } = require("./models");

const seedData = async (db) => {
  try {
    await db.collection("users").drop();
    await db.collection("products").drop();
    await db.collection("orders").drop();

    console.log("Collections dropped successfully.");
  } catch (error) {
    console.error("Error dropping collections:", error);
  }
};

const startServer = async () => {
  try {
    const connection = await connectDB();

    await seedData(connection.connection.db);

    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
  } catch (error) {
    console.error("Error during server start:", error);
  }
};

startServer();

app.get('/', (req, res) => {
    res.send('Hello world');
});
