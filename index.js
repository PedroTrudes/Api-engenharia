const express = require("express");
const app = express();
const connectDatabase = require('./src/database/db');
const userRoute = require('./src/routes/user.route');
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