const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Cart = sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    cartItem:Sequelize.TEXT,
    cartTotal: Sequelize.INTEGER
})

module.exports= Cart;
