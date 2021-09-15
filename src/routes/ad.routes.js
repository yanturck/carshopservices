const multer = require('multer');
const uploadIMG = require('../../middlewares/uploadimage');

const adController = require('../controllers/ad.controller');

module.exports = app => {
    // Create a new Customer
    app.post("/anuncios/create", uploadIMG.single('image'), adController.createAd);

    // app.get("/anuncios/item", anuncioController.findAllItems);
    // app.get("/anuncios/servico", anuncioController.findAllServicos);
    //
    // app.get("/anuncios", adController.findAll);
    app.get("/anuncios/servicos", adController.findAllServicos);
    app.get("/anuncios/itens", adController.findAllItens);
    //
    // app.get("/anuncios/:idCategoria", anuncioController.findByCategory);
    // app.get("/anuncios/item/:idCategoria", anuncioController.findItemByCategory);
    // app.get("/anuncios/servico/:idCategoria", anuncioController.findServicoByCategory);
};