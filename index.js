import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();//executando o conect com o database
app.use(express.json());//express sabe trabalhar com JSON
app.use("/user", userRoute);//rota de user
app.use("/login", authRoute); //rota de login e authenticação com usuario
app.use("/news", newsRoute);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//ROTAS
    //Method HTTP => (CRUD)
    //GET - Pega info
    //Post - Cria info
    //Put - altera toda a informação
    //Path - altera alguma informação
    //Delete - apaga um informação