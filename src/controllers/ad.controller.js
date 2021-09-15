const client = require("../scripts/client")

exports.createAd = (req, res) => {
    var titulo = req.body.txtNome;
    var desc = req.body.txtDescricao;
    var valor = req.body.txtValor;
    var cat = req.body.txtCat;

    var imagem = '';
    if (req.file) imagem = req.file;

    var tipoAd = req.body.txtTipo;
    
    switch(tipoAd) {
        case '1':
            var disp = req.body.txtDisp;
            var dispEntrega = req.body.txtDispEntrega;

            client.user.verificarUser().then(data => {
                client.ad.createItem({
                    "descricao": desc,
                    "valor": parseInt(valor),
                    "idCategoria": cat,
                    "nome": titulo,
                    "disponibilidade": disp,
                    "disponibilidadeEntrega": dispEntrega,
                    "imagem": imagem.filename,
                    "userEmail": data.email
                });
            });
            break;
        case '2':
            var dispRealizacao = req.body.txtDispRealizacao;

            client.user.verificarUser().then(data => {
                client.ad.createServico({
                    "descricao": desc,
                    "valor": parseInt(valor),
                    "idCategoria": cat,
                    "nome": titulo,
                    "disponibilidadeRealizacao": dispRealizacao,
                    "imagem": imagem.filename,
                    "userEmail": data.email
                });
            });
    }
    res.render("cliente_pedidos");
}

exports.findAllServicos = (req, res) => {
    client.ad.findAllServicos().then(data => {
        res.render('servicos', {
            servicos: data
        }); 
    });
}

exports.findAllItens = (req, res) => {
    client.ad.findAllItens().then(data => {
        res.render('pecas', {
            pecas: data
        }); 
    });
}