import {Router} from 'express';
import userController from '../controllers/user.controller.js';
import { validId, validUser } from '../middlewares/global.middlewares.js';

const route = Router();

route.post("/create", userController.create) // Rota de criação para usuario
route.get("/list", userController.findAll) // rota de pegar todos os usuarios
route.get("/list/:id", validId, validUser ,userController.findById)//Rota de pegar apenas um usuairo com ID
route.patch("/atualizar/:id", validId, validUser ,userController.update)

export default route;