import mongoose from 'mongoose';

//criando schemas de como vai ser o banco sem relacionamento de tabela
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

export default User;