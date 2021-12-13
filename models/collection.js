const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Collection = sequelize.define('collection',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports= Collection;
