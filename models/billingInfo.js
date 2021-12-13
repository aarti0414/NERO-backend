const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const BillingInfo = sequelize.define('billingInfo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    cardNumber: Sequelize.STRING,
    expDate: Sequelize.STRING,
    CVV: Sequelize.STRING,
    authorizationCode: Sequelize.TEXT,
    name: Sequelize.STRING

})

module.exports= BillingInfo;