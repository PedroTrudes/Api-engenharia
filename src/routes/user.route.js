const route = require('express').Router();//ja inicializando ela na variavel route
const userController = require('../controllers/user.controller');
const {validId, validUser} = require('../middlewares/global.middlewares');

route.post("/create", userController.create) // Rota de criação para usuario
route.get("/list", userController.findAll) // rota de pegar todos os usuarios
route.get("/list/:id", validId, validUser ,userController.findById)//Rota de pegar apenas um usuairo com ID
route.patch("/atualizar/:id", validId, validUser ,userController.update)

module.exports = route