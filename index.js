const express = require('express');
const consign = require('consign');
const handlebars = require('express-handlebars');

let app = express();
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars'); // USA OS MODELOS DE LAYOUT - AS TELAS TEM QUE ESTÁ DENTRO DE views/layouts
app.use('/img', express.static('img')); // INCLUI AS IMAGENS




app.get('/', (req, res) => {
    //CARREGAR A PAGINA HOME - INDEX 
    res.render(__dirname+'/views/layouts/home.handlebars');
});
app.get('/quem-somos', (req, res) => {
    //CARREGAR A PAGINA QUEM SOMOS 
    res.render(__dirname+'/views/layouts/quem-somos.handlebars');
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