const axios = require('axios');

const ip = '127.0.0.1';
const port = '2000';

axios.post(`http://${ip}:${port}/user/cadastrarUser`, {
    "nome": "yan",
    "email": "yan.rp@discente.ufma.br",
    "senha": "1111",
    "fone": "(98) 98436-7826",
    "prod": true,
    "cnpj": "6473625728337834-272893-32",
    "nFan": "Car Shop Services",
    "local": "Rua 14A"
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
    console.log("\nAlgo deu errado! :*(\n");
    });