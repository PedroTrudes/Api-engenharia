import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import userService  from '../services/user.service.js';

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    try {
        //Verificações de Header inicio
        const { authorization } = req.headers;
        if (!authorization) {
            return res.send(401);
        }

        const parts = authorization.split(" ")
        if (parts.length !== 2) {
            return res.send(401)
        }

        const [schema, token] = parts;//desestruturando o token "parts"
        if (schema !== "Bearer") {
            console.log(schema)
            return res.send(401)
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                console.log(error);
                return res.status(401).send({message: "Token invalido"})
            }
            
            const user = await userService.findByIdService(decoded.id)//pegando a função do userService e passando o token
            console.log(user)
            if(!user || !user.id){
                return res.status(401).send({message: "Token invalido"})
            }
            req.userId = user.id;

            return next();
        });
        //Verificações de Header termino

    } catch (error) {
        return res.status(500).send({ message: err.message })
    }
}