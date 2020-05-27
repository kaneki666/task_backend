const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')



const MongoURL = require("./config/url").mongoURL;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//route
app.use("/", require("./routes/route.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
