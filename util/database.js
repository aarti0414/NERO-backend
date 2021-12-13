const Sequelize = require('sequelize');

const sequelize = new Sequelize('nero-avenue','root','testroot',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports=sequelize;