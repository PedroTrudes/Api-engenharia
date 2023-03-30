import { Router } from "express";
import { createNews, getAllNews, topNews } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
const router = Router();

router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)
router.get('/top', topNews)

export default router;