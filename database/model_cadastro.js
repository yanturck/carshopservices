const sequelize = require('sequelize');
const connection = require('./database');

//criando tabela 

const cadastro = connection.define('usuarios',{
    nome:{
        type:sequelize.STRING,
        allowNull:true
    },
    email:{
        type:sequelize.TEXT,
        allowNull:true
    },  
    senha:{
        type:sequelize.TEXT,
        allowNull:true
    },   
    
});

//executando o model
cadastro.sync({force:false}).then(()=>{

});

module.exports = cadastro;
