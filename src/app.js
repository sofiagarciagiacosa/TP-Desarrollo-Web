const path= require("path");
require("dotenv").config();

// 1°
const express = require("express");
const bodyParser = require("body-parser");
const { home } = require("nodemon/lib/utils");
const session= require("express-session");
const cookieParser= require("cookie-parser");
const fs= require("fs");
const bcrypt= require("bcrypt");

//2°
const app = express();

//3°
app.set("view engine", "ejs");

//4° Rutas
const homeRoutes = require("./routes/home");
const cartRoutes= require("./routes/cart");
const userRoutes= require("./routes/users");
const productRoutes= require("./routes/products");
const signInRoutes= require("./routes/signIn");
const signuproutes= require("./routes/signup");



app.use("/", homeRoutes);
app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use("/carrito", cartRoutes);
app.use("/signIn", signInRoutes);
app.use("/signup",signuproutes);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

app.use(cookieParser());

app.use(
    session({
        saveUninitialized:true,
        secret: process.env.SESSION_SECRET,
        cookie: {maxAge: oneDay},
        resave:false,
    })
);

//4°
app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});

