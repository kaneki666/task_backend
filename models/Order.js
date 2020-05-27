const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: String,
});

 const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  productimages: [ImageSchema],
  details: String,
  reviews: String,
  qty: String,
});


const OrderSchema = new mongoose.Schema({
  products: [ProductSchema],
  totalprice: String,
  time: String
});

module.exports = mongoose.model("orders", OrderSchema);
