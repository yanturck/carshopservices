const axios = require('axios');

const User = require('./user');
const Categorias = require('./categorias');
const Anuncio = require('./anuncio');
const Solicitacao = require('./solicitacao');
const GuardarSolicitacao = require('./guardar-solicitacao');
// const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');

const ip = '127.0.0.1';
const port = '3333';

const user = new User(axios, ip, port);
const cat = new Categorias(axios, ip, port);
const ad = new Anuncio(axios, ip, port);
const solicit = new Solicitacao(axios, ip, port);
const guardSolicite = new GuardarSolicitacao(axios, ip, port);

module.exports = {
    user: user,
    cat: cat,
    ad: ad,
    solicit: solicit,
    guardSolicite: guardSolicite
};

// user.createConsumidor({
//     'nome': 'Yan Rocha',
//     'email': 'yan@discente.ufma.br',
//     'telefone': '(98) 00000-0000',
//     'senha': '123456',
//     'cpf': '000.000.000-00'
// });

// cat.create({
//     'nome': 'Amortecedores',
//     'descricao': 'Para produtos novos'
// });
// cat.create({
//     'nome': 'Baterias',
//     'descricao': 'Para produtos usados'
// });
// cat.create({
//     'nome': 'Filtros',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Molas',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Pastilhas',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Óleos',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Escapamentos',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Rolamentos',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Catalizadores',
//     'descricao': 'Para serviços'
// });
// cat.create({
//     'nome': 'Discos de Freio',
//     'descricao': 'Para serviços'
// });

// cat.deleteCategory(1);
// cat.deleteCategory(2);

cat.findAll();