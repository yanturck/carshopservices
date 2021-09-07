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
