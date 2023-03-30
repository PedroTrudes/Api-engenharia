import { Router } from "express";
import { createNews, getAllNews, topNews, findById, searchByTitle } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {validId} from '../middlewares/global.middlewares.js';
const router = Router();

router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)
router.get('/top', topNews)
router.get('/search', searchByTitle )

router.get('/:id', authMiddleware ,findById);

export default router;