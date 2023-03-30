import { Router } from "express";
import { createNews, getAllNews, topNews, findById } from '../controllers/news.controller.js'
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {validId} from '../middlewares/global.middlewares.js';
const router = Router();

router.post('/', authMiddleware, createNews)
router.get('/', getAllNews)
router.get('/top', topNews)
router.get('/:id', validId ,findById);

export default router;