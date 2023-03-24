import User from '../models/User.js';

//User é o Schema
//Create é um metodo do mongoose que cria
const createService = (body) => User.create(body);

const findAllService = () => User.find();

//Chamando as funções de UserController
const findByIdService = (id) => User.findById(id);

//atualizando os campos que forem alterado na aplicação
const updateService = (id, name, username, email, password) => {
    return User.findByIdAndUpdate({ _id: id }, { name, username, email, password });
};

export default {createService, findAllService, findByIdService, updateService};