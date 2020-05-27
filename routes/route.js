const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
 
const MongoURL = require("../config/url").mongoURL;
const ProductsSchema = require("../models/Product");
const OrderSchema = require("../models/Order");

// Connect to MongoDB
mongoose
  .connect(MongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//routes
router.get("/", (req, res) => {
  res.send("HELLO FROM BACKEND")
})

router.get("/products", (req, res) => {
  ProductsSchema.find().then((data) => {
    res.send(data);
  });
});

router.post("/order", (req, res) => {
 
  const data =new OrderSchema( req.body.data);
 
data.save( (err)=> {
  if (err){
    console.log(err)
  }
 
});
});


module.exports = router;
