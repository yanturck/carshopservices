const produto = require('../../index');
const client = require("../scripts/client")

exports.createAd = (req, res) => {
    var titulo = req.body.txtNome;
    var desc = req.body.txtDescricao;
    var valor = req.body.txtValor;
    var cat = req.body.txtCat;

    var tipoAd = req.body.txtTipo;
    
    switch(tipoAd) {
        case '1':
            var disp = req.body.txtDisp;
            var dispEntrega = req.body.txtDispEntrega;
            client.ad.createItem({
                "descricao": desc,
                "valor": parseInt(valor),
                "idCategoria": cat,
                "nome": titulo,
                "disponibilidade": disp,
                "disponibilidadeEntrega": dispEntrega,
                "userEmail": "yan@discente.ufma.br"
            });
            break;
        case '2':
            var dispRealizacao = req.body.txtDispRealizacao;
            client.ad.createServico({
                "descricao": desc,
                "valor": parseInt(valor),
                "idCategoria": cat,
                "nome": titulo,
                "disponibilidadeRealizacao": dispRealizacao,
                "userEmail": "yan@discente.ufma.br"
            });
    }

    client.ad.findAll().then( data => {
        return data;
    });
}

exports.findAll = (req, res) => {
    client.ad.findAll().then( data => {
        produto.produtos = data;
    });
}