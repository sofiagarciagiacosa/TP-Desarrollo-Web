const path= require("path");
require("dotenv").config();

// 1°
const express = require("express");
const bodyParser = require("body-parser");
const { home } = require("nodemon/lib/utils");
const session= require("express-session");
const cookieParser= require("cookie-parser");
const quince=1000*60*15;


//2°
const app = express();

//3°
app.set("view engine", "ejs");

//4° Rutas
const homeRoutes = require("./routes/home");
const cartRoutes= require("./routes/cart");
const productRoutes= require("./routes/products");
const authRoutes= require("./routes/auth");



app.use("/", homeRoutes);
app.use("/products",productRoutes);
app.use("/carrito", cartRoutes);
app.use("/",authRoutes);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cookieParser());
app.use(bodyParser.json());


app.use(
    session({
        saveUninitialized:true,
        secret: process.env.SESSION_SECRET,
        cookie: {maxAge: quince},
        resave:false,
    })
);

//4°
app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});


