import express from 'express';
import connectDatabase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';

const app = express();
const PORT = 3000;

connectDatabase();//executando o conect com o database
app.use(express.json());//express sabe trabalhar com JSON

app.use("/user", userRoute);//rota de user

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));



//ROTAS
    //Method HTTP => (CRUD)
    //GET - Pega info
    //Post - Cria info
    //Put - altera toda a informação
    //Path - altera alguma informação
    //Delete - apaga um informação