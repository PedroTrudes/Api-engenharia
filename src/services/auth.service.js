import User from "../models/User.js";
import jwt  from "jsonwebtoken";

export const loginService = (email) => User.findOne({ email: email }).select("+password"); //falando que eu quero o email de user.email e adicionando o password na resposta

export const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400} )