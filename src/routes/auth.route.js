import { Router } from "express";
const route = Router();

import {login} from '../controllers/auth.controller.js'

route.post('/auth', login);

export default route;