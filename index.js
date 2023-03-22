const express = require("express");
const app = express();
const userRoute = require('./src/routes/user.route');


app.use("/number", userRoute)
app.use("/user", userRoute)

//ROTAS
    //Method HTTP => (CRUD)
    //GET - Pega info
    //Post - Cria info
    //Put - altera toda a informação
    //Path - altera alguma informação
    //Delete - apaga um informação

app.listen(3000);