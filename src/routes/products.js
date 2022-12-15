const path= require("path");

const express = require("express");

const router= express.Router();

const products= [
    {
        id: 1,
        name: "Producto 1",
        description: "This is the first product",
        image: 
            "../assets/d04f9e1cf3dc7d8a4522828dbfe2893c.jpg" ,

    },
    {
        id: 2,
        name: "Producto 2",
        description: "This is the first product",
        image:
           "../assets/ddbf02c3860b9e77fb7ad17ea476f6a1.jpg",

    },
    {
        id: 3,
        name: "Producto 3",
        description: "This is the first product",
        image:
           "../assets/f83259bd913b67879bdc165bb09cc176.jpg",

    },
    {
        id: 4,
        name: "Producto 4",
        description: "This is the first product",
        image:
           "../assets/NEWCOLLECTION.png",

    },
    
]
//5°
router.get("/", (req,res) => {
    return res.status(200).render("vistas/products.ejs",{
        products,
    });
});

router.get("/:id", (req,res) => {
    const {id} = req.params;
    const product= products.find((product) => product.id == id);
    return res.status(200).render("vistas/detailProduct.ejs");
});

module.exports= router;