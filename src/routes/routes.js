const client = require('../scripts/client');

module.exports = app => {
    app.get('/', (req, res) => {
        client.user.verificarUser().then( data1 => {
            client.user.findUserByEmail(data1.email).then( data2 => {
                client.ad.findAll().then( data3 => {
                    res.render('index', {
                        usuario: data2,
                        produtos: data3,
                        logado: client.logado
                        });
                });
            })
        })
    });
    
    app.get('/quem-somos', (req, res) => {
        //CARREGAR A PAGINA HOME - INDEX 
        res.render('quem-somos');
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
        var nome = req.body.txtNome;
        var valor = req.body.txtValor;

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
        client.cat.findAll().then( data => {
            res.render('anunciar', {
                cats: data
            });
        })
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

    app.get('/carrinho', (req, res) => {
        //CARREGAR A PAGINA carrinho
        res.render('carrinho');
    });
    
    app.get('/duvidas-frequentes', (req, res) => {
        //CARREGAR A PAGINA carrinho
        res.render('carrinho');
    });
}