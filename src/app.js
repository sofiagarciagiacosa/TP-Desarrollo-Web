const path = require ("path");
require("dotenv").config();

const express = require("express");
const { home } = require("nodemon/lib/utils");

const app = express();

app.get("/home", (req,res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
})

app.listen( process.env.PORT, () => {console.log("Server listening on Port:", process.env.PORT)});

