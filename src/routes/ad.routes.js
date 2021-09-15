const multer = require('multer');
const uploadIMG = require('../../middlewares/uploadimage');

const adController = require('../controllers/ad.controller');

module.exports = app => {
    // Create a new Customer
    app.post("/anuncios/create", uploadIMG.single('image'), adController.createAd);
    app.get("/anuncios/servicos", adController.findAllServicos);
    app.get("/anuncios/itens", adController.findAllItens);
};