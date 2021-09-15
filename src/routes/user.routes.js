const userController = require('../controllers/user.controller');

module.exports = app => {
    app.post("/user/create", userController.createUser);
    app.post("/user/autenticar", userController.auntenticar);
    app.get("/user/sair", userController.logout);
};