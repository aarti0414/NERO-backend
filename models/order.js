const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Order = sequelize.define('order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    paymentType: Sequelize.INTEGER,
    total: Sequelize.INTEGER,
    instruction: Sequelize.STRING,
    discount: Sequelize.INTEGER,
    couponCode: Sequelize.INTEGER,
    authorizationCode: Sequelize.INTEGER,
    customerName: Sequelize.STRING,
    status: Sequelize.STRING
})

module.exports= Order;