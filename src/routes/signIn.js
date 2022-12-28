const path= require("path");
const express = require("express");
const router= express.Router();
const session= require("express-session");
const quince=1000*60*15;
const fs= require("fs");
const bcrypt= require("bcrypt");
const bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({ extended: true}));

router.use(
    session({
        saveUninitialized:true,
        secret: process.env.SESSION_SECRET,
        cookie: {maxAge: quince},
        resave:false,
    })
);
//5°

router.get("/", (req,res) => {
    console.log("session:", req.session);
    res.render("../views/vistas/signIn.ejs");
});


router.post("/", (req,res) =>{
    const{user,password}= req.body;
    const file=fs.readFileSync(path.join(__dirname, "./user.json"));
    let parsedFile=JSON.parse(file);

    const existedUser= parsedFile.find((usuario)=> usuario.user===user);
    if(!existedUser){
        return res.render("../views/vistas/invalid.ejs")
    }
    const validPassword= bcrypt.compareSync(password,existedUser.password);

    if(!validPassword){
        return res.render("../views/vistas/invalid.ejs");
    }

    res.render("../views/vistas/home.ejs", {user});
    
});



module.exports= router;

