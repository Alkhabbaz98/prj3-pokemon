const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
const app = express();

const pokemonRoutes = require('./routes/pokemonRoute/pokemonRoutes')

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.use(express.json());
app.use(morgan("dev"));
app.use("/pokewiki", pokemonRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app is listing");
});
