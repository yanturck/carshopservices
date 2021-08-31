const express = require('express');

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// ============================== USUARIO ===================================
app.post('/user/cadastrarUser', (req, res) => {
    // recebe um json {nome, email, fone, senha, prod}
    const nome = req.body.nome;
    const email = req.body.email;
    const fone = req.body.fone;
    const senha = req.body.senha;

    const produtor = req.body.prod; // true || false (identificando Produtores)

    var cnpj = '';
    var nomeFantasia = '';
    var local = '';

    var cpf = '';

    if (produtor == true) {
        // recebe {cnpj, nFan, local}
        cnpj = req.body.cnpj;
        nomeFantasia = req.body.nFan;
        local = req.body.local;
    } else {
        // recebe {cpf}
        cpf = req.body.cpf;
    }

    console.log(`Usuário ${nome}, que possue
email: ${email}
fone: ${fone}
senha: ${senha}
É produtor? ${produtor}
CNPJ: ${cnpj}
da empresa "${nomeFantasia}"
localizada ${local}
possuidor do cpf: ${cpf}`);

    res.send('Blz!');
});

app.get('/user/autenticar', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    console.log(`Usuário: ${email}\nSenha: ${senha}`);
    res.send('Blz!');
});

app.post('/user/change', (req, res) => {
    // recebe {change: [mudou o que?], changes, changes}
    var changes = req.body.change; // vetor indicando os parametros que mudou
    // changes = [nome, email, fone, senha, prod, cnpj, nFan, local, cpf]

    while (changes.length > 0) {
        switch (changes.pop()) {
            case 'nome': // função para alterar o nome
                break;
            case 'email': // função para alterar o email
                break;
            case 'fone': // função para alterar o fone
                break;
            case 'senha': // função para alterar a senha
                break;
            case 'prod': // função para Ser/DeixarSer produtor
                break;
            case 'cnpj': // função para alterar cnpj
                break;
            case 'cpf': // função para alterar cpf
                break;
            case 'nFan': // função para alterar o nome fantasia
                break;
            case 'local': // função para alterar o local
                break;
            default: console.log('Parametro que vc deseja alterar NÃO ENCONTRADO!');
                break;
        }
    }
    res.send('Ok!');
});

// ============================== ANUNCIOS ===================================
app.post('/user/cadastrarAd', (req, res) => {
    const nome = req.body.nome;
    const descricao = req.body.desc;
    const valor = req.body.valor;
    const categoria = req.body.cg;

    const item = req.body.item; // true | false (Identificando se é Item ou Servico)

    var disp = ''; // se ainda tem em estoque
    var dispEntrega = ''; // entrega em casa ou no somente retirada no local
    var dispRealizacao = ''; // realização em qualquer lucal ou somente no estabelecimento
    
    if (item == true) { // anuncio é um ITEM
        disp = req.body.disp;
        dispEntrega = req.body.dispEntrega;
    } else { // anuncio é um SERVICO
        dispRealizacao = req.body.dispReal;
    }
    res.send('Ok!');
});

app.get('/listaAd', (req, res) => {

});

app.get('/user/editarAd', (req, res) => {
    // recebe {change: [mudou o que?], changes, changes}
    var changes = req.body.change; // vetor indicando os parametros que mudou
    // changes = [nome, descricao, valor, categoria, item, disponibilidade, dispEntrega, dispRealização]

    while (changes.length > 0) {
        switch (changes.pop()) {
            case 'nome': // função para alterar o nome
                break;
            case 'desc': // função para alterar a desc
                break;
            case 'valor': // função para alterar o valor
                break;
            case 'cg': // função para alterar a categoria
                break;
            case 'item': // função para Ser/DeixarSer item
                break;
            case 'disp': // função para alterar a disponibilidade
                break;
            case 'dispEntrega': // função para alterar disponibilidade de Entrega
                break;
            case 'dispReal': // função para alterar a disponibilidade de Realização
                break;
            default: console.log('Parametro que vc deseja alterar NÃO ENCONTRADO!');
                break;
        }
    }
    res.send('Ok!');
});


app.listen(port, () => {
    console.log('Servidor Inicializado!');
});