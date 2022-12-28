const fs= require("fs");
const path= require("path");
const bcrypt= require("bcrypt");
const crypto= require("crypto");


const sendSigninForm=(req,res) =>{
    console.log("get session: ",req.session);
    
    res.render(".././views/vistas/signin.ejs");
    
};

const getSigninData =(req,res) =>{
    const{user,password}= req.body;
    const file=fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile=JSON.parse(file);

    const existedUser= parsedFile.find((usuario)=> usuario.user===user);
    if(!existedUser){
        return res.render(".././views/vistas/invalid.ejs")
    }
    const validPassword= bcrypt.compareSync(password,existedUser.password);

    if(!validPassword){
        return res.render(".././views/vistas/invalid.ejs");
    }

    res.render(".././views/vistas/home.ejs", {user});
    
};

const sendSignupForm = (req,res) => {
    console.log("get session: ",req.session);
    res.render(".././views/vistas/signup.ejs");
};

const getSignupData =(req,res) => {
    const{user,password}= req.body;

    const file=fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile=JSON.parse(file);


    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt,(err, hash) =>{
            const id=crypto.randomUUID();
            const newUser={
                id,
                user,
                password: hash,
            };
            req.session.userId=id;
            
            
            
            
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

   

    

    res.redirect("/signin");
}

module.exports={
    getSigninData,
    getSignupData,
    sendSigninForm,
    sendSignupForm,
}