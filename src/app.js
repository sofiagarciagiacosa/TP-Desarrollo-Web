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
const livingRoutes= require("./routes/living");
const cocinaRoutes= require("./routes/cocina");
const dormitorioRoutes= require("./routes/dormitorio");
const bañoRoutes= require("./routes/baño"); 


app.use("/", homeRoutes);
app.use("/products",productRoutes);
app.use("/carrito", cartRoutes);
app.use("/",authRoutes);
app.use("/living", livingRoutes);
app.use("/cocina", cocinaRoutes);
app.use("/dormitorio", dormitorioRoutes);
app.use("/bano", bañoRoutes);

app.use('/filtrar', express.static(path.join(__dirname, '../REACT-FILTER-PROYECT/src/main.jsx')));

app.get('/filtrar/', (req, res) => {
    res.sendFile(path.join(__dirname, '../REACT-FILTER-PROYECT/index.html'));
});

//5°
app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});


