import User from "../models/User.js";

export const loginService = (email) => User.findOne({ email: email }).select("+password"); //falando que eu quero o email de user.email e adicionando o password na resposta
