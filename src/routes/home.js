const path= require("path");

const express = require("express");

const router= express.Router();

router.get("/", (req,res) => {
    res.status(200).render("vistas/home.ejs");
})

module.exports= router;