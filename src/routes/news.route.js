import { Router } from "express";
import { createNews, getAllNews, topNews, findById, searchByTitle, byUser, updateNews } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {validId} from '../middlewares/global.middlewares.js';
const router = Router();

//Buscar sempre deixar por ultimo os gets que vc tem que passar algum parametro pois o express se perde
router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)
router.get('/top', topNews)
router.get('/search', searchByTitle )
router.get('/byUser', authMiddleware, byUser)
router.get('/:id', authMiddleware ,findById);

router.patch('/update/:id', authMiddleware, updateNews);

export default router;