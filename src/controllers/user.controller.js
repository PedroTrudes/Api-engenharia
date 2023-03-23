const userService = require('../services/user.service');
const mongoose = require('mongoose');

const create = async (req, res) => {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
        res.status(400).send({ message: "Envio de formulario faltando dados" }).status(400)
    }

    const user = await userService.createService(req.body)//Criando o campo com os dados no body

    //Menssagem de erro na criação de um novo usuario
    if (!user) {
        return res.status(400).send({ message: "Erro na criação de usuario" })
    }

    //Criando o usuario com os dados dos campos
    res.status(201).send({
        message: "Usuario cadastrado com sucesso",
        user: {
            id: user._id,
            name,
            username,
            email
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.status(400).send({ message: "Não a usuarios cadastrados" })
    }

    res.send(users)
}

const findById = async (req, res ) => {
    const idUser = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(idUser)){
        return res.status(400).send({ menssage: "Id Invalido" });
    }

    const user = await userService.findByIdService(idUser);

    if (!user) {
        return res.status(400).send({ menssage: "Usuario não encontrado" });
    }

    res.send(user);
}

module.exports = { create, findAll, findById }; //Consigo passar somente oq eu quero exportar