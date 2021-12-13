const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Plan = sequelize.define('plan',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    name: Sequelize.STRING,
    accessCondition:Sequelize.STRING,
    duration: Sequelize.INTEGER,
    cost: Sequelize.FLOAT
})

module.exports=Plan;