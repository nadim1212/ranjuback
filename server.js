const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("dotenv");
const { readdirSync } = require("fs");
require ('dotenv').config()


// app
const app = express();
app.use(cors());

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

  // middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(function (req, res, next) {
  //Enabling CORS
<<<<<<< HEAD
  res.header("Access-Control-Allow-Origin", "");
=======
  res.header("Access-Control-Allow-Origin", "*");
>>>>>>> 37f5dede7030f089e76c5c89a6497680be33965e
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("preflightContinue" , "false");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next();
  });

//routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));


// port
// const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
