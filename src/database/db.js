const mongoose = require('mongoose');

//fazendo a conect com o servidor
const connectDatabase = () => {
    console.log("Estamos connectando no banco de dados")

    mongoose.connect("mongodb+srv://root:root@cluster0.huwas4v.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log("Mongo DB Atlas conectado");
        }).catch((error) => {
            console.log(error);
        })
};

module.exports = connectDatabase;