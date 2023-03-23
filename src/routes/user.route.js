const route = require('express').Router();//ja inicializando ela na variavel route
const userController = require('../controllers/user.controller');

route.post("/create", userController.create) // Rota de criação para usuario

route.get("/list", userController.findAll) // rota de pegar todos os usuarios

route.get("/list/:id", userController.findById)

module.exports = route

//http://localhost:3000/number/soma =>  number vem do index.js
//route.get("/soma", userController.soma)

//aqui prefixamos o primeiro nome da rota e em use route passamos a rota 
//que vai ser usada http://localhost:3000/user/nome
//route.get("/nome", userController.myName)