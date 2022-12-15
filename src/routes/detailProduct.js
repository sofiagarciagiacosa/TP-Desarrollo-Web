const path= require("path");

const express= require("express");

const router = require("./home");
const { defaultMaxListeners } = require("events");

const Router= express.Router();
//5°
router.get("/detail-product", (req,res) => {
    return res.status(200).render("vistas/detailProduct.ejs");
})

module.exports = router;

