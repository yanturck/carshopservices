const client = require('../scripts/client');

exports.createUser = (req, res) => {
    var nome = req.body.txtNome;
    var email = req.body.txtEmail;
    var fone = req.body.txtFone;
    var senha = req.body.txtSenha;

    var conta = req.body.tipoConta;

    switch (conta) {
        case '1':
            var cpf = req.body.txtCPF;
            client.user.createConsumidor({
                'email': email,
                'nome': nome,
                'telefone': fone,
                'senha': senha,
                'cpf': cpf
            });
            break;
        case '2':
            var cnpj = req.body.txtCNPJ;
            var nFan = req.body.txtNFan;
            var cep = req.body.txtCEP;
            client.user.createProdutor({
                'email': email,
                'nome': nome,
                'telefone': fone,
                'senha': senha,
                'cnpj': cnpj,
                'local': cep,
                'fantasiaNome': nFan
            });
            break;
        default:
            break;
    }
    res.render('confirme-cadastro');
}

exports.auntenticar = (req, res) => {
    var user = {
        'email': req.body.txtEmail,
        'senha': req.body.txtSenha
    };

    client.user.autenticarUser(user).then(data => {
        if(data == 'ok') {
            client.logado = true;
            res.render("cliente_pedidos");
        }
        else {
            res.render("log");
        }
    });
}

exports.logout = (req, res) => {
    client.logado = false;
    res.redirect('/');
}

exports.deleteUser = (req, res) => {

}