const express = require('express');
const consign = require('consign');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.set('view engine', 'ejs'); // USA OS MODELOS DE LAYOUT - AS TELAS TEM QUE ESTÁ DENTRO DE views/layouts
app.use('/img', express.static('img')); // INCLUI AS IMAGENS
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));// transforma os dados do formulario em json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('./src/routes/routes')(app);
require('./src/routes/user.routes')(app);
require('./src/routes/ad.routes')(app);

/**executando o servidor - escutando* */
app.listen(3000, '127.0.0.1', () => {
    console.log('servidor rodando')
});