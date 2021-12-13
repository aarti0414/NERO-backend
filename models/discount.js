const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Discount = sequelize.define('discount',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    code: Sequelize.TEXT,
    type: Sequelize.TEXT,
    value: Sequelize.FLOAT,
    condition: Sequelize.STRING,
    usageCount: Sequelize.DOUBLE

})

module.exports= Discount;