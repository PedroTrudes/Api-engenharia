const User = require('../models/User');

//User é o Schema
//Create é um metodo do mongoose que cria
const create = (body) => {
    return User.create(body)
};

module.exports = {
    create,
};