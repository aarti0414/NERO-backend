const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Wishlist = sequelize.define('wishlist',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    createdAt: Sequelize.DATEONLY
})

module.exports= Wishlist;
