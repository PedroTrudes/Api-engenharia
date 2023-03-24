import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
        required: true,
        select: false
    }
});

//Evento feito antes de salvar os dados
UserSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model("User", UserSchema);// salvando os dados

export default User;