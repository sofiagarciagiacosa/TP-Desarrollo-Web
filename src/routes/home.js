const path= require("path");

const express = require("express");

const router= express.Router();
//5°
router.get("/", (req,res) => {
    res.status(200).render("vistas/home.ejs");
})

module.exports= router;