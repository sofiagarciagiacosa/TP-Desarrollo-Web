const path= require("path");

const {getUserById} = require("../controllers/userController")

const express = require("express");

const router= express.Router();

router.get("/:id", getUserById)

module.exports= router;