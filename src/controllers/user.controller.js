const create = (req, res) =>{
    const {name, username, email, password} = req.body;
    if(!name || !username || !email || !password) {
        res.status(400).send({message: "Envio de formulario faltando dados"}).status(400)
    }
    res.status(201).send({message: "Usuario cadastrado com sucesso", user:{name, username, email }})
}

const soma = (req,res) =>{
    const soma = 100 +1
    res.send({soma: soma})
}

const myName = (req, res) =>{
    const primeName = "Pedro"
    const secundName = "Joaquim"

    res.send({primename: primeName, secundname: secundName})
}

module.exports = { soma, myName, create }; //Consigo passar somente oq eu quero exportar