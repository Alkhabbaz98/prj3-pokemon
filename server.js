const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors")
dotenv.config();
const app = express();

const pokemonRoutes = require('./routes/pokemonRoute/pokemonRoutes')
const authRoutes = require('./routes/user/userRoutes')

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use("/pokewiki/poketeam", pokemonRoutes);
app.use('/user', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app is listing");
});

