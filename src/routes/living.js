const express = require("express");
const router= express.Router();

const productsLiving= [
    {
        
        id: "producto1",
        name: "PROUCTO 1",
        description: "This is the first product",
        price: "$12500",
        image: 
            "../assets/d04f9e1cf3dc7d8a4522828dbfe2893c.jpg" ,

    },
    {
        id: "producto2",
        name: "PROUCTO 2",
        description: "This is the second product",
        price: "$12500",
        image:
           "../assets/ddbf02c3860b9e77fb7ad17ea476f6a1.jpg",

    },
    {
        id: "producto3",
        name: "PROUCTO 3",
        description: "This is the third product",
        price: "$12500",
        image:
           "../assets/f83259bd913b67879bdc165bb09cc176.jpg",

    },
    {
        id: "producto4",
        name: "PROUCTO 4",
        description: "This is the fourth product",
        price: "$12500",
        image:
           "../assets/ddbf02c3860b9e77fb7ad17ea476f6a1.jpg",

    },
]





router.get("/", (req,res) =>{
    return res.status(200).render("vistas/living",{
        productsLiving,
    });
});
router.get("/:id", (req,res) => {
    const {id} = req.params;
    const product= productsLiving.find((product) => product.id == id);
    return res.status(200).render("vistas/detailProduct.ejs",{
        productsLiving,
    });
});


module.exports= router;






