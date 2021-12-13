const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Product = sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    productName: Sequelize.STRING,
    isVaraint: Sequelize.BOOLEAN,
    variantType: Sequelize.BOOLEAN,
    status: Sequelize.BOOLEAN,
    tax: Sequelize.TEXT,
    discountType: Sequelize.INTEGER,
    discountAmount: Sequelize.INTEGER,
    discountCondition: Sequelize.STRING,
    displayAssets: Sequelize.TEXT,
    description: Sequelize.STRING,
    tabs: Sequelize.TEXT
})

module.exports=Product;