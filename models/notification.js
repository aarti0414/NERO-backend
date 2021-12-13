const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Notification = sequelize.define('notification',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    title: Sequelize.STRING,
    read: Sequelize.BOOLEAN,
    description: Sequelize.TEXT
})

module.exports= Notification;