const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Subscription = sequelize.define('subsciption',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    usage:Sequelize.STRING,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATEONLY,
    billintType: Sequelize.INTEGER
})

module.exports=Subscription;