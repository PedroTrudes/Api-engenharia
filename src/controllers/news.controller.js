import {createService, findAllService, countNews, topNewsService, findByIdService, searchByTitleService, byUserService, updateNewsService, deleteNewsService} from "../services/news.service.js";

const createNews = async (req, res) => {
    try {
        const { title, text, banner } = req.body;
        if (!title || !text || !banner) {
            send.status(400).send({ message: "Preencha os campos" })
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.status(201).send({ message: "News criada com sucesso" });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

};

const getAllNews = async (req, res) => {
    //Sistema de paginação na api 
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }

        const news = await findAllService(offset, limit);
        const total = await countNews();
        const currentUrl = req.baseUrl;

        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;


        if (news.length === 0) {
            return res.status(400).send({ message: "Não nenhuma news" })
        }

        //res.send(news)

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                coments: item.comentes,
                name: item.user.name,
                username: item.user.username,
            })),
        });

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};

const topNews = async (req, res) => {
    try {
        const news = await topNewsService();   
        
        if(!news){
            return res.status(400).send({message: "Não a news registradas"})
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                coments: news.comentes,
                name: news.user.name,
                username: news.user.username,
            },
        });

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const findById = async (req, res) => {
    try {
        const {id} = req.params

        const news = await findByIdService(id);

        if(news.length === 0){
            return res.status(400).send({message: "Não a postagens desse usuario"})
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                coments: news.comentes,
                name: news.user.name,
                username: news.user.username,
            }
        })

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const searchByTitle = async (req, res) => {
    try {
        let { title } = req.query;
        console.log(title)
        const news = await searchByTitleService(title);

        if(news.length === 0){
            return res.status(400).send({message: "Não a nenhum news com esse title"});
        }

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                coments: item.comentes,
                name: item.user.name,
                username: item.user.username,
            })),
        });

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const byUser = async (req, res) => {
    try {
        const id = req.userId;
        const news = await byUserService(id);

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                coments: item.comentes,
                name: item.user.name,
                username: item.user.username,
            })),
        });

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
};

const updateNews = async (req, res) => {
    try {
        const {title, text, banner} = req.body;
        const {id} = req.params;

        if(!title && !text && !banner){
            return res.status(400).send({message: "Preencha algum campo do formulario"})
        }
        
        const news = await findByIdService(id);
        //console.log(typeof news.user._id, typeof req.userId) vendo oq esta sendo recebido nessas variaveis 

        //transformando user._id em String para poder fazer essa comparação
        if(String(news.user._id) !== req.userId){
            return res.status(401).send({message: "Usuario não autorizado"})
        }
        
        await updateNewsService(id, title, text, banner)

        return res.send({message: "Post atualizado com sucesso!"})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const deleteNews = async (req, res) =>{
    try {
        const {id} = req.params
        const news = await findByIdService(id)

        if(String(news.user._id) !== req.userId){
            return res.status(400).send({message: "Você não esta logado, então não pode deletar esse post"});
        }

        await deleteNewsService(id);
        return res.send({message: "Dados deletados com sucesso"});

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

export { createNews, getAllNews, topNews, findById, searchByTitle, byUser, updateNews, deleteNews }