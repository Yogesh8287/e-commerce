require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const item = require("./app/router/item");
const app = express();
const cors = require("cors");
mongoose
  .connect("mongodb://localhost/Ecommerce")
  .then(() => console.log("connected to mongodb.."))
  .catch(() => console.log("does not connected to monngdb..."));

app.use(cors());
app.use(express.json());
app.use("/items", item);

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`listening on port ${Port}...`));
