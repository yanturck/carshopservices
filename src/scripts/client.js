const axios = require('axios');

const User = require('./user');
const Categorias = require('./categorias');
const Anuncio = require('./anuncio');
const Solicitacao = require('./solicitacao');

const ip = '127.0.0.1';
const port = '3333';

const user = new User(axios, ip, port);
const cat = new Categorias(axios, ip, port);
const ad = new Anuncio(axios, ip, port);
const solicit = new Solicitacao(axios, ip, port);

module.exports = {
    user: user
};

// var form = document.getElementById('formCadastro');
// var nome = document.getElementById('txtNome');

// form.addEventListener('submit', function(e) => {
//     alert(nome.value);

//     e.preventDefault();
// });
// cat.create({
//     nome: 'eletronicos',
//     descricao: 'Produtos do ramo eletronico!'
// });

// ad.createItem({
//     'descricao': 'pois é!',
//     'valor': 2.50,
//     'idCategoria': 2,
//     'nome': 'Arduino Uno',
//     'disponibilidade': true,
//     'disponibilidadeEntrega': 'Somente retiradas'
// });

// ad.findAllItems();

// ad.createServico({
//     'descricao': 'hajdgshaj',
//     'valor': 10,
//     'idCategoria': 2,
//     'nome': 'Arduino Uno',
//     'disponibilidadeRealizacao': 'Em qualquer lugar!',
// });

// ad.findAllServicos();

// ad.findAll();

// ad.findServicoByCategory(2);

