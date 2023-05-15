const express = require("express");
const router= express.Router();

const productsCocina= [
    {
        id: "10",
        name: "SET DE PLATOS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$23996",
        image: 
            "../assets/cocina1.webp" ,

    },
    {
        id: "11",
        name: "SET DE TAZAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$11173",
        image:
           "../assets/cocina2.webp",

    },
    {
        id: "12",
        name: "CONTENEDOR A CUADROS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2054",
        image:
           "../assets/cocina3.webp",

    },
    {
        id: "13",
        name: "ORGANIZADOR DE TAZAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5000",
        image:
           "../assets/cocina4.webp",

    },
    {
        id: "14",
        name: "FRUTERA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5500",
        image:
           "../assets/cocina5.webp",

    },
    {
        id: "15",
        name: "TAZA NUDE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2500",
        image:
           "../assets/cocina11.webp",

    },
    {
        id: "16",
        name: "SET POSAVASOS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2336",
        image:
           "../assets/cocina7.webp",

    },
    {
        id: "17",
        name: "TAZA NUDE GRANDE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$3170",
        image:
           "../assets/cocina8.webp",

    },
    {
        id: "18",
        name: "SET DE BOWLS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$11499",
        image:
           "../assets/cocina9.webp",

    },
    {
        id: "19",
        name: "CONTENEDOR NUDE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2054",
        image:
           "../assets/cocina10.webp",

    },
]



router.get("/", (req,res) =>{
    return res.status(200).render("vistas/cocina",{
        productsCocina,
    });
});
router.get("/:id", (req,res) => {
    const {id} = req.params;
    const product= productsCocina.find((product) => product.id == id);
    return res.status(200).render("vistas/detailProductCocina.ejs");
});


module.exports= router;






