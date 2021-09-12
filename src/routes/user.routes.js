const userController = require('../controllers/user.controller');

module.exports = app => {
    app.post("/user/create", userController.createUser);
    app.post("/user/autenticar", userController.auntenticar);
    // app.delete("/user/delete/:email", userController.deleteUser);
    // app.get("/usuarios/consumidor/:email", usuariosController.findConsumerByEmail);
    // app.get("/usuarios/produtor/:email", usuariosController.findProducerByEmail);
    // app.get("/usuarios/:email", usuariosController.findUserByEmail);
};