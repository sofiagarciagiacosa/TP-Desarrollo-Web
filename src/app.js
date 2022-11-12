require("dotenv").config();

const express = require("express");
const { home } = require("nodemon/lib/utils");

const app = express();

app.use(express.static("src/views"));

const homeRoutes = require("./routes/home");

const productRoutes= require("./routes/detailProduct");

const cartRoutes= require("./routes/cart")

app.use("/", homeRoutes);

app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});

