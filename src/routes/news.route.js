import { Router } from "express";
import { createNews, getAllNews, topNews, findById, searchByTitle, byUser } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {validId} from '../middlewares/global.middlewares.js';
const router = Router();

router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)
router.get('/top', topNews)
router.get('/search', searchByTitle )
router.get('/byUser', authMiddleware, byUser)

//Buscar sempre deixar por ultimo os gets que vc tem que passar algum parametro pois o express se perde
router.get('/:id', authMiddleware ,findById);

export default router;