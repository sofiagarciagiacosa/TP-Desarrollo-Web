const path= require("path");

const express= require("express");

const router = require("../home");
const { defaultMaxListeners } = require("events");

const Router= express.Router();


router.get("/detail-product", (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, "../../views/html/detailProduct.html"));
})

module.exports = router;

