const fs= require("fs");
const path= require("path");
const bcrypt= require("bcrypt");
const crypto= require("crypto");



const sendSigninForm=(req,res) =>{
    
    res.render(".././views/vistas/signin.ejs");
    
};

const getSigninData =(req,res) =>{
    const{ user, password }= req.body;
    const file=fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile=JSON.parse(file);

    const existedUser= parsedFile.find((current)=> current.user===user);

    if(!existedUser){
        return res.render(".././views/vistas/invalid.ejs")
    }
    const validPassword= bcrypt.compareSync(password,existedUser.password);

    if(!validPassword){
        return res.render(".././views/vistas/invalid.ejs");
    }

    req.session.userId=existedUser.id;
    req.session.save();

    res.redirect("/");
    
};

const sendSignupForm = (req,res) => {
    res.render(".././views/vistas/signup.ejs");
};

const getSignupData =(req,res) => {
    const{ user, password}= req.body;

    const file=fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile=JSON.parse(file);

    const existedUser=parsedFile.some((current) => current.user === user);

    if (existedUser){
        return res.send("El usuario ya existe");
    }



    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt,(err, hash) =>{
            const id=crypto.randomUUID();
            const newUser={
                id,
                user,
                password: hash,
            };
            req.session.userId=id;
            req.session.save();
            
            
            
            fs.writeFileSync(
                path.join(__dirname, "../models/user.json"), 
                JSON.stringify( 
                    [...parsedFile, newUser], 
                    null, 
                    2
                )
            );
                
        });
    });

    res.redirect("/");
}

const signOut= (req,res) => {
    req.session.destroy();
    res.redirect("/signin");

};

module.exports={
    getSigninData,
    getSignupData,
    sendSigninForm,
    sendSignupForm,
    signOut,
}