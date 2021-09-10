const express = require('express');
const consign = require('consign');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

//CARREEGANDO O BANCO
const connection = require('./database/database');
var model_cadastro = require('./database/model_cadastro.js');

connection.authenticate().then(()=>{
    console.log("conexao ok !");
}).catch((msgError)=>{
    console.log("conexao deu erro !");
});

app.set('view engine', 'ejs'); // USA OS MODELOS DE LAYOUT - AS TELAS TEM QUE ESTÁ DENTRO DE views/layouts
app.use('/img', express.static('img')); // INCLUI AS IMAGENS
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));// transforma os dados do formulario em json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// <%=  %> VARIAVEL 

//<% if(msg==true){  %>
// HTML
//<% } %> EXPRESSAO 


/**
 * <% produtos.forEach(funtion(produto){ %>
 * 
 * <%= produto.nome %>
 * <%= produto.preco %>
 * 
 * <% }) %> 
 * 
 * 
 * 
 * /:sobrenome
 */
app.get('/', (req, res) => {

    model_cadastro.findAll({raw:true,order:[
        ['id','DESC']// ORDEM DECRECENTE
    ]}).then(usuarios=>{
        console.log(usuarios);
        res.render("index",{
            usuarios:usuarios,
        });
    });


    //CARREGAR A PAGINA HOME - INDEX
    var sobrenome = req.params.sobrenome
    var nome = "agamenon";
    var lang = "Javascript";
    
    var produtos = [
        {nome:"motor",preco:1000.0,descricao:"Motor em perfeito estado",estoque:15},
        {nome:"jogo de rodas",preco:200.5,descricao:"jogo de rodas Usado",estoque:2},
        {nome:"cabecote",preco:500.0,descricao:"cabecote em perfeito estado",estoque:5},
    ] 
   /**
    res.render('index',{
        nome:nome,
        lang:lang,
        sobrenome:sobrenome,
        produtos:produtos
    }); */

});

app.get('/quem-somos', (req, res) => {
    //CARREGAR A PAGINA HOME - INDEX 
    res.render('quem-somos');
});

/**
app.get('/pecas', (req, res) => {
    //CARREGAR A PAGINA pecas 
    res.render('pecas');
});

 */

app.get('/produto/:id', (req, res) => {
    //CARREGAR A PAGINA pecas
    var id = req.params.id;
    model_cadastro.findOne({
        where:{id: id}
    }).then(peca=>{
        if(peca != undefined){
            //peça achada
            res.render("produto",{
                peca:peca
            });            
        }else{
            res.redirect("/");
        }
    });    
});

app.get('/servicos', (req, res) => {
    //CARREGAR A PAGINA servicos 
    res.render('servicos');
});

app.get('/promocoes', (req, res) => {
    //CARREGAR A PAGINA promocoes 
    res.render('promocoes');
});

app.get('/cadastro', (req, res) => {
    //CARREGAR A PAGINA cadastro 
    res.render('cadastro');
});

app.get('/cadastro-produtor', (req, res) => {
    //CARREGAR A PAGINA cadastro-produtor 
    res.render('cadastro-produtor');
});

app.get('/login', (req, res) => {
    //CARREGAR A PAGINA login 
    res.render('login');
});

app.get('/produto', (req, res) => {
    //CARREGAR A PAGINA produto 
    res.render('produto');
});
app.get('/carrinho', (req, res) => {
    //CARREGAR A PAGINA carrinho 
    res.render('carrinho');
});

app.get('/politica-de-privacidade', (req, res) => {
    //CARREGAR A PAGINA politica-de-privacidade 
    res.render('politica-de-privacidade');
});

app.get('/termos-de-uso', (req, res) => {
    //CARREGAR A PAGINA termos-de-uso 
    res.render('termos-de-uso');
});

app.get('/contato', (req, res) => {
    //CARREGAR A PAGINA contato 
    res.render('contato');
});

app.get('/duvidas-frequentes', (req, res) => {
    //CARREGAR A PAGINA duvidas-frequentes 
    res.render('duvidas-frequentes');
});

app.get('/anunciar', (req, res) => {
    //CARREGAR A PAGINA duvidas-frequentes 
    res.render('anunciar');
});

app.post('/cliente_pedidos', (req, res) => {
    //CARREGAR A PAGINA cliente_pedidos 
    var txtemail = req.body.txtemail;
    var txtsenha = req.body.txtsenha;
    res.render('cliente_pedidos',{
        txtemail:txtemail,
        txtsenha:txtsenha,
        
    });

});

app.get('/cliente_pedidos', (req, res) => {
    //CARREGAR A PAGINA cliente_pedidos 
    var txtemail =" req.body.txtemail";
    var txtsenha = "req.body.txtsenha";
    res.render('cliente_pedidos',{
        txtemail:txtemail,
        txtsenha:txtsenha,
        
    });

});

app.get('/cliente_favoritos', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cliente_favoritos');

});

app.get('/cliente_contatos', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cliente_contatos');

});

app.get('/cliente_dados', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cliente_dados');

});
app.get('/cliente_endereco', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cliente_endereco');
});

app.get('/cadastrar_nova_senha', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cadastrar_nova_senha');
}); 
app.get('/cliente_senha', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('cliente_senha');
});
app.get('/confirmacadnovasenha', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('confirmacadnovasenha');
});

app.get('/confirme-cadastro', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('confirme-cadastro');
});
app.get('/confirme-contato', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('confirme-contato');
});
app.get('/contato', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('contato');
});


app.get('/duvidas-frequentes', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('duvidas-frequentes');
});

app.get('/msg-recuperar-senha', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('msg-recuperar-senha');
});

app.get('/politica-de-privacidade', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('politica-de-privacidade');
});

app.get('/recuperar-senha', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('recuperar-senha');
});
app.get('/termos-de-uso', (req, res) => {
    //CARREGAR A PAGINA cliente_favoritos     
    res.render('termos-de-uso');
});

app.post("/confirme-cadastro",(req, res)=>{
    //CARREGAR A PAGINA cliente_pedidos 
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha ;
    var telefone = req.body.telefone ;
    var endereco = req.body.endereco ;
    var complemento = req.body.complemento ;
    var numero = req.body.numero;
    model_cadastro.create({
        nome:nome,
        email:email,
        senha:senha,
        telefone:telefone,
        endereco:endereco,
        complemento:complemento,
        numero:numero
    }).then(()=>{
        res.redirect("/");
    });
    //res.send("Form"+  txtemail);

});


app.post("/log",(req, res)=>{
    //CARREGAR A PAGINA cliente_pedidos 
    //var txtemail = req.body.txtemail;
    //var txtsenha = req.body.txtsenha;
    res.redirect("cliente_pedidos");

});


app.get('/carrinho', (req, res) => {
    //CARREGAR A PAGINA carrinho
    res.render('carrinho');
});

app.get('/duvidas-frequentes', (req, res) => {
    //CARREGAR A PAGINA carrinho
    res.render('carrinho');
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