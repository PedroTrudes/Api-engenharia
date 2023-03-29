import { Router } from "express";
import { createNews, getAllNews } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
const router = Router();

router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)

export default router;