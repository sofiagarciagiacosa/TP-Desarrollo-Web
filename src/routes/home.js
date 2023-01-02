const path= require("path");

const express = require("express");
const { sendHomeView } = require("../controllers/homeCotrollers");
const { checkUserId } = require("../middlewares/checkUserId");


const router= express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true}));


//5°
router.get("/",[checkUserId],sendHomeView);

module.exports= router;