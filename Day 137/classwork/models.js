const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
const Product = mongoose.model("Product", ProductSchema);

const OrderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quantity: Number,
});
const Order = mongoose.model("Order", OrderSchema);

module.exports = { User, Product, Order };