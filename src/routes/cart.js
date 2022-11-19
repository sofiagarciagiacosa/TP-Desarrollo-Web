const path= require ("path");

const express= require("express");

const router = require("./home");

const Router= express.Router();

router.get("/carrito", (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, "../../views/html/cart.html"));
})

module.exports = router;
