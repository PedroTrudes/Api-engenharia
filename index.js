const express = require("express");
const app = express();
const userRoute = require('./src/routes/user.route');
const PORT = 3000;

app.use(express.json());

app.use("/user", userRoute)

//ROTAS
    //Method HTTP => (CRUD)
    //GET - Pega info
    //Post - Cria info
    //Put - altera toda a informação
    //Path - altera alguma informação
    //Delete - apaga um informação

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));