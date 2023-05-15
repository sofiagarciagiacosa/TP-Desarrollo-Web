const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const bcrypt = require('bcrypt');


const products= sequelize.define ("products",{
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});



module.exports= products;