const express = require('express');
const consign = require('consign');
const handlebars = require('express-handlebars');

const bodyParser = require('body-parser');
const User = require('./src/scripts/client.js');

let app = express();
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars'); // USA OS MODELOS DE LAYOUT - AS TELAS TEM QUE ESTÁ DENTRO DE views/layouts
app.use('/img', express.static('img')); // INCLUI AS IMAGENS


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    //CARREGAR A PAGINA HOME - INDEX 
    res.render(__dirname+'/views/layouts/home.handlebars');
});
app.get('/quem-somos', (req, res) => {
    //CARREGAR A PAGINA QUEM SOMOS 
    res.render(__dirname+'/views/layouts/quem-somos.handlebars');
});

app.get('/cadastro', (req, res) => {
    res.render(__dirname+'/views/layouts/cadastro.handlebars');
});
app.get('/login', (req, res) => {
    res.render(__dirname+'/views/layouts/login.handlebars');
});

app.post('/cadastro-user', (req, res) => {
    var nome = req.body.txtNome;
    var email = req.body.txtEmail;
    var fone = req.body.txtFone;
    var senha = req.body.txtSenha;

    var conta = req.body.tipoConta;

    switch (conta) {
        case '1':
            var cpf = req.body.txtCPF;
            User.user.createConsumidor({
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
            User.user.createProdutor({
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
    res.render(__dirname+'/views/layouts/confirme-cad.handlebars');
});

app.post('/login-user', (req, res) => {
    var email = req.body.email;
    
    const userLog = User.user.findUserByEmail(email);
    console.log();
});

//consign().include('routes').into(app);//inclui todos os arquivos INTO em app

//app.use(routesIndex);
//app.use('/users', routesUsers);


//{//
 //let routesIndex = require('./routes/index');
//let routesUsers = require('./routes/users');   
//const { url } = require('inspector');

/* rotas* 
app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>ola mundo</h1>');
});
*/

/**
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name: 'Agamenon',
            email: 'contato@email.com',
            id: 1
        }]
    });
});
*/
//}
/**executando o servidor - escutando* */
app.listen(3000, '127.0.0.1', () => {
    console.log('servidor rodando')
});