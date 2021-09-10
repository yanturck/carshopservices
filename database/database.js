const Sequelize = require('sequelize');
const Banco ='mydb';
const BancoUser ='root';
const BancoPass ='root';
const connection = new Sequelize(Banco,BancoUser,BancoPass,{
    host:'localhost',
    dialect:'mysql' 
});

module.exports = connection;