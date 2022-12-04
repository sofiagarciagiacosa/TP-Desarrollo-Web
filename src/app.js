const path= require("path");
require("dotenv").config();

const express = require("express");
const { home } = require("nodemon/lib/utils");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

const homeRoutes = require("./routes/home");

const productRoutes= require("./routes/detailProduct");

const cartRoutes= require("./routes/cart");

const userRoutes= require("./routes/users");

app.use("/", homeRoutes);

app.use("/users",userRoutes);

app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});

