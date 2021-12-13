const { STRING } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Cart = sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    displayAsset: Sequelize.TEXT,
    commentCount: Sequelize.INTEGER,
    likeCount: Sequelize.INTEGER,
    subcriptionCount: Sequelize.INTEGER,
    keywords: Sequelize.STRING,
})

module.exports= Cart;
