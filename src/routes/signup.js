const path= require("path");
const express = require("express");
const { fstat } = require("fs");
const fs= require("fs");
const router= express.Router();
const bcrypt= require("bcrypt");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true}));

router.get("/", (req,res) => {
    res.render("../views/vistas/signup.ejs");
});

router.post("/", (req,res) => {
    const{user,password}= req.body;

    const file=fs.readFileSync(path.join(__dirname, "./user.json"));
    let parsedFile=JSON.parse(file);


    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt,(err, hash) =>{
            fs.writeFileSync(
                path.join(__dirname, "./user.json"), 
                JSON.stringify( 
                    [
                        ...parsedFile, 
                        {
                            user,
                            password: hash,
                        },
                    ], 
                    null, 
                    2
                )
            );
            
        });
    });

   

    

    res.redirect("/signIn");
});

module.exports=router;