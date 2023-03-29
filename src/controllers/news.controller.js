import {createService, findAllService} from "../services/news.service.js";

const createNews = async (req, res) =>{
    try {        
        const {title, text, banner} = req.body;
        
        if(!title || !text || !banner){
            send.status(400).send({message: "Preencha os campos"})
        }

        await createService({
            title,
            text, 
            banner,
            user: req.userId,
        });

        res.status(201).send({message: "News criada com sucesso"});
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

const getAllNews = async (req, res) => {
    try {
        const news = await findAllService();
        if(news.length === 0){
            return res.status(400).send({message: "Não nenhuma news"})
        }
        res.send(news)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export {createNews, getAllNews}