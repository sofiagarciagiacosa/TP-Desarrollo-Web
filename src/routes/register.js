const path= require("path");

const express = require("express");

const router= express.Router();
//5°
router.get("/", (req,res) => {
    res.status(200).render("vistas/register.ejs");
})

module.exports= router;