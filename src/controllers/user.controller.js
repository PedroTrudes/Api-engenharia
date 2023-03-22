const userService = require('../services/user.service');

const create = async (req, res) =>{
    const {name, username, email, password} = req.body;
    if(!name || !username || !email || !password) {
        res.status(400).send({message: "Envio de formulario faltando dados"}).status(400)
    }

    const user = await userService.create(req.body)//Criando o campo com os dados no body

    //Menssagem de erro na criação de um novo usuario
    if(!user){
        return res.status(400).send({message: "Erro na criação de usuario"})
    }

    //Criando o usuario com os dados dos campos
    res.status(201).send({
        message: "Usuario cadastrado com sucesso", 
        user:{
            id: user._id,
            name, 
            username, 
            email },
        });
};

module.exports = { create }; //Consigo passar somente oq eu quero exportar

/*
const soma = (req,res) =>{
    const soma = 100 +1
    res.send({soma: soma})
}

const myName = (req, res) =>{
    const primeName = "Pedro"
    const secundName = "Joaquim"

    res.send({primename: primeName, secundname: secundName})
}
*/