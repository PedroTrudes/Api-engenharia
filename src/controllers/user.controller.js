const soma = (req,res) =>{
    const soma = 100 +1
    res.send({soma: soma})
}

const myName = (req, res) =>{
    const primeName = "Pedro"
    const secundName = "Joaquim"

    res.send({primename: primeName, secundname: secundName})
}

module.exports = { soma, myName }; //Consigo passar somente oq eu quero exportar