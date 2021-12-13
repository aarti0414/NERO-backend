const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    email:{ 
        type:Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    firstName : Sequelize.STRING,
    lastName: Sequelize.STRING,
    phoneNo:{
        type: Sequelize.INTEGER,
        allowNull : false,
        unique: true
    },
    username:{
        type: Sequelize.INTEGER,
        unique: true
    },
    password: Sequelize.STRING,
    userType: Sequelize.STRING,
    dateOfBirth: Sequelize.DATEONLY,
    lastLogin: Sequelize.TIME,
    loginLocation: Sequelize.STRING,
    dateJoined: Sequelize.DATEONLY,
    verified: Sequelize.BOOLEAN

})

module.exports=User;