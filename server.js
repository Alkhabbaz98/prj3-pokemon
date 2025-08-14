const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.use(express.json());
app.use(morgan("dev"));
app.use("/pokewiki");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app is listing");
});
