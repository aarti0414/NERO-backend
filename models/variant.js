const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const variant = sequelize.define('variant',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    status:Sequelize.BOOLEAN,
    variantName: Sequelize.STRING,
    variantType: Sequelize.STRING,
    quanityInStock: Sequelize.INTEGER,
    productDimension: Sequelize.TEXT,
    dimensionMetrics: Sequelize.TEXT
})

module.exports= variant;