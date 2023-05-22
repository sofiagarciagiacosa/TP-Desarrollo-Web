const express = require("express");
const router= express.Router();

const productsLiving= [
    {
        id: "5",
        name: "MESA REDONDA BLANCA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$28000",
        image:
           "../assets/82878398_004_dliving1.webp",

    },
    {
        
        id: "1",
        name: "RACK ROSA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$11950",
        image: 
            "../assets/d04f9e1cf3dc7d8a4522828dbfe2893c.jpg" ,
        

    },
    {
        id: "2",
        name: "LAMPARA A CUADROS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$3120",
        image:
           "../assets/ddbf02c3860b9e77fb7ad17ea476f6a1.jpg",

    },
    {
        id: "3",
        name: "PUFF BLANCO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$18392",
        image:
           "../assets/f83259bd913b67879bdc165bb09cc176.jpg",

    },
    {
        id: "4",
        name: "MESA REDONDA NEGRA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$28000",
        image:
           "../assets/82177999_001_dliving2.webp",

    },
    {
        id: "6",
        name: "MESA RECTANGULAR NEGRA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$37899",
        image:
           "../assets/81602765_001_dliving3.webp",
    },
    {
        id: "7",
        name: "SOFA BLANCO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$80259",
        image:
           "../assets/83006395_010_dliving4.webp",
    },
    
    {
        id: "8",
        name: "SOFA GRIS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$142490",
        image:
           "../assets/82097635_003_dliving5.webp",
    },
    {
        id: "9",
        name: "ESPEJO BLANCO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        price: "$5020",
        image:
           "../assets/78069929_010_dliving6.webp",
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






