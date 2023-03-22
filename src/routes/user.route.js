const route = require('express').Router();//ja inicializando ela na variavel route
const userController = require('../controllers/user.controller');

//http://localhost:3000/number/soma =>  number vem do index.js
route.get("/soma", userController.soma)

//aqui prefixamos o primeiro nome da rota e em use route passamos a rota 
//que vai ser usada http://localhost:3000/user/nome
route.get("/nome", userController.myName)

module.exports = route