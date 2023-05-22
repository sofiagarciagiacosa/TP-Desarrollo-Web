const express = require("express");
const router= express.Router();

const productsDormitorio= [
    {
        id: "20",
        name: "CUBRECAMA SET BLANCO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$20000",
        image: 
            "../assets/dormi1.webp" ,

    },
    {
        id: "21",
        name: "SET DE ALMOHADONES",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$8000",
        image:
           "../assets/dormi5.webp",

    },
    {
        id: "21",
        name: "CUBRECAMA SET ROSA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$20000",
        image:
           "../assets/dormi3.webp",

    },
    {
        id: "23",
        name: "FRAZADA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5672",
        image:
           "../assets/dormi7.webp",

    },
    {
        id: "24",
        name: "FRAZADA LILA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5672",
        image:
           "../assets/dormi9.webp",

    },
    {
        id: "25",
        name: "SET DE SABANAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$7877",
        image:
           "../assets/dormi2.webp",

    },
    {
        id: "26",
        name: "CUBRECAMA SET VERDE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$16485",
        image:
           "../assets/dormi4.webp",

    },
    {
        id: "27",
        name: "ALMOHADON",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2500",
        image:
           "../assets/dormi6.webp",

    },
    {
        id: "28",
        name: "SET DE FRAZADAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$16789",
        image:
           "../assets/dormi8.webp",

    },
    {
        id: "29",
        name: "ALMOHADON A CUADROS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$2500",
        image:
           "../assets/dormi10.webp",

    },
]



router.get("/", (req,res) =>{
    return res.status(200).render("vistas/dormitorio",{
        productsDormitorio,
    });
});
router.get("/:id", (req,res) => {
    const {id} = req.params;
    const product= productsDormitorio.find((product) => product.id == id);
    return res.status(200).render("vistas/detailProductDormitorio.ejs");
});


module.exports= router;






