const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Review = sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    heading: Sequelize.STRING,
    rating: Sequelize.INTEGER,
    body: Sequelize.STRING
})

module.exports= Review;
