const path= require ("path");

const express= require("express");

const router= express.Router();

const usuarios = require("../models/users.js");
const products = require("../models/products.js");
const carrito = require("../models/carrito.js");

router.post('/', (req, res) => {
    const id = req.body.id;
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    const query = `INSERT INTO carrito (user_id, product_id, quantity) VALUES (${id}, ${productId}, ${quantity})`;

    connection.query(query, (error, results, fields) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.send('Producto agregado al carrito');
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT carrito.id, products.productName, products.price, carrito.quantity
                 FROM carrito
                 JOIN productos ON carrito.product_id = products.productId
                 WHERE carrito.user_id = ${id}`;
    connection.query(query, (error, results, fields) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(results);
        }
    });
});

///// carrito variables//////
















//5°
router.get("/", (req,res) => {
    res.status(200).render("vistas/cart.ejs");
})

module.exports = router;
