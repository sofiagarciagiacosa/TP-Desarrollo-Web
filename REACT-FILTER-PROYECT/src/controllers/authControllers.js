const fs= require("fs");
const path= require("path");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const bcryptjs = require('bcryptjs');
const { sign, verify } = jwt;
const bcrypt = require('bcrypt');


const usuarios = require("../models/users.js");


const sendSigninForm=(req,res) =>{
    
    res.render("vistas/signin.ejs");
    
}


const getSigninData = async(req,res) =>{
    const { email, password } = req.body;

    const user = await usuarios.findOne({
        where: {
            email: email
        }
    });
    if (!user) {
        return res.status(400).send({
            message: 'Invalid Credentials'
        })
    }
    if (!await bcryptjs.compare(password, user.password)) {
        return res.status(400).send({
            message: 'Invalid Credentials'
        })
    }
    const accessToken = sign({
        id: user.id
    }, "access_secret", {expiresIn: 60 * 60});

    const refreshToken = sign({id: user.id
    }, "refresh_secret", {expiresIn: 24 * 60 * 60 })

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //equivalent to 1 day
    });
    res.redirect("/");
};



const sendSignupForm = (req,res) => {
    res.render(".././views/vistas/signup.ejs");
};


const getSignupData = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    var usr = {
        name : req.body.name,
        lastname : req.body.lastname,
        email : req.body.email,
        password : await bcrypt.hash(req.body.password, salt)
    };
    user = await usuarios.create(usr);
   
    res.redirect("/signin");
};



const checkUserId= async(req,res) => {
    try {
        console.log(req.cookies);
        const accessToken = req.cookies['accessToken'];
        const payload = verify(accessToken, "access_secret");

        if(!payload) {
            return res.status(401).send({
                message: 'Unauthenticated'
            })
        }
        const user = await usuarios.findOne({
            where: {
                id: payload.id
            }
        });

        if (!user) {
            return res.status(401).send({
                message: 'Unauthenticated'
            })
        }

        const {password, ...data} = user;

        res.send(data);
        //falta mandarlo a account
    }catch(e) {
        console.log(e)
        return res.status(401).send({
            message: 'Unauthenticated'
        })
    }

};

const refresh = async (req, res) => {
    try {
        const refreshToken = req.cookies['refreshToken'];

        const payload = verify(refreshToken, "refresh_secret");

        if (!payload) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const accessToken = sign({
            id: payload.id,
        }, "access_secret", { expiresIn: 60 * 60 })

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 //equivalent to 1 day
        });

        res.send({
            message: 'success'
        })

    }catch(e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
};

const signOut= async(req,res) => {
    res.cookie('accessToken', '', {maxAge: 0});
    res.cookie('refreshToken', '', {maxAge: 0});
    res.redirect("/signin");

};





module.exports={
    getSigninData,
    getSignupData,
    sendSigninForm,
    sendSignupForm,
    checkUserId,
    refresh,
    signOut,
    
    
}