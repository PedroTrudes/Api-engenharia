import mongoose from'mongoose';

//fazendo a conect com o servidor
const connectDatabase = () => {
    console.log("Estamos connectando no banco de dados")

    mongoose.connect(process.env.MONGODB_URI, //valor do banco tem que ser escondido
        { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log("Mongo DB Atlas conectado");
        }).catch((error) => {
            console.log(error);
        })
};


export default connectDatabase;