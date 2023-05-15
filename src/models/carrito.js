const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const bcrypt = require('bcrypt');


const carrito= sequelize.define ("carrito",{
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    
});



module.exports= carrito;