const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Address = sequelize.define('address',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    nickName: Sequelize.STRING,
    Name: Sequelize.STRING,
    email: Sequelize.STRING,
    phoneNo: Sequelize.INTEGER,
    line1: Sequelize.STRING,
    line2: Sequelize.STRING,
    landmark: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    zipcode:Sequelize.INTEGER
})

module.exports= Address;