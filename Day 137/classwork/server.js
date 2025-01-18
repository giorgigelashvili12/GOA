const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db.js');

const app = express();

const { User, Product, Order } = require("./models");

const seedData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const users = await User.insertMany([
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" },
    ]);

    const products = await Product.insertMany([
      { name: "Laptop", price: 1200 },
      { name: "Phone", price: 800 },
    ]);

    const orders = await Order.insertMany([
      { productId: products[0]._id, userId: users[0]._id, quantity: 1 },
      { productId: products[1]._id, userId: users[1]._id, quantity: 2 },
    ]);

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

app.get('/', (req, res) => {
    res.send('Hello world');
});

const PORT = process.env.PORT;
app.listen(3000, () => console.log('App listening on port', PORT), connectDB().then(seedData));