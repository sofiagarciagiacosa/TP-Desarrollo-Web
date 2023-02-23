const path= require("path");
require("dotenv").config();

// 1°
const express = require("express");
const bodyParser = require("body-parser");
const { home } = require("nodemon/lib/utils");
const session= require("express-session");
const cookieParser= require("cookie-parser");
const quince=1000*60*60*24;
const {testDb}= require("./database");

//2°
const app = express();

//conecto DB
testDb();

// middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cookieParser());
app.use(bodyParser.json());

//3° settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(
    session({
        saveUninitialized:true,
        secret: process.env.SESSION_SECRET,
        cookie: {maxAge: quince},
        resave:false,
    })
);



//4° Rutas
const homeRoutes = require("./routes/home");
const cartRoutes= require("./routes/cart");
const productRoutes= require("./routes/products");
const authRoutes= require("./routes/auth");

app.use("/", homeRoutes);
app.use("/products",productRoutes);
app.use("/carrito", cartRoutes);
app.use("/",authRoutes);


//5°
app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});


