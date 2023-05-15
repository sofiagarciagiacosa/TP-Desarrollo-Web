const express = require("express");
const router= express.Router();

const productsBaño= [
    {
        id: "30",
        name: "TOALLAS CARITAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5400",
        image: 
            "../assets/bano1.webp" ,

    },
    {
        id: "31",
        name: "ORGANIZADOR DUCHA",
        description:"Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$9588",
        image:
           "../assets/bano3.webp",

    },
    {
        id: "32",
        name: "ALFOMBRA GET NAKED",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$3560",
        image:
           "../assets/bano5.webp",

    },
    {
        id: "33",
        name: "ORGANIZADOR DE MAQUILLAJE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$6499",
        image:
           "../assets/bano12.webp",

    },
    {
        id: "34",
        name: "ALFOMBRA CUADRITOS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$3560",
        image:
           "../assets/bano9.webp",

    },
    {
        id: "35",
        name: "TOALLAS ESTAMPADAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5400",
        image:
           "../assets/bano2.webp",

    },
    {
        id: "36",
        name: "ORGANIZADOR DUCHA MADERA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$9588",
        image:
           "../assets/bano4.webp",

    },
    {
        id: "37",
        name: "ALFOMBRA FLORCITAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$3560",
        image:
           "../assets/bano6.webp",

    },
    {
        id: "38",
        name: "CORTINA FLORES",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$4640",
        image:
           "../assets/bano8.webp",

    },
    {
        id: "39",
        name: "TOALLA CABELLO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2272",
        image:
           "../assets/bano10.webp",

    },
]



router.get("/", (req,res) =>{
    return res.status(200).render("vistas/baño",{
        productsBaño,
    });
});
router.get("/:id", (req,res) => {
    const {id} = req.params;
    const product= productsBaño.find((product) => product.id == id);
    return res.status(200).render("vistas/detailProduct.ejs");
});


module.exports= router;






