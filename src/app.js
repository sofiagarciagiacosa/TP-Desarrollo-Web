const path= require("path");
require("dotenv").config();

// 1°
const express = require("express");

const bodyParser = require("body-parser");
const { home } = require("nodemon/lib/utils");

//2°
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

//3°
app.set("view engine", "ejs");

//4° Rutas
const homeRoutes = require("./routes/home");

const cartRoutes= require("./routes/cart");

const userRoutes= require("./routes/users");

const productRoutes= require("./routes/products");

app.use("/", homeRoutes);
app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use(bodyParser.urlencoded({ extended: true}));

//4°
app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});

