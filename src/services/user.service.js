const User = require('../models/User');

//User é o Schema
//Create é um metodo do mongoose que cria
const createService = (body) => {
    return User.create(body)
};

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService,
};