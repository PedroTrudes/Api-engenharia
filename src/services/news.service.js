import News from "../models/News.js";

const createService = (body) => News.create(body)

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const searchByTitleService = (title) => News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
}).sort({ _id: -1 }).populate("user");

const byUserService = (id) => News.find({user: id}).sort({_id: -1}).populate("user");

const updateNewsService = (id, title, text, banner) => News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true})

const deleteNewsService = (id) => News.findOneAndDelete({_id: id});

const likeNewsService = (idNews, userId) => News.findOneAndUpdate(
    {_id: idNews, "likes.userId" : {$nin: [userId] } },  
    {$push : {likes : {userId, createLike: new Date() } } }
); 

const deslikeNewsService = (idNews, userId) => News.findOneAndUpdate({_id : idNews}, {$pull: { likes: {userId} } })
export { createService, findAllService, countNews, topNewsService, findByIdService, searchByTitleService, byUserService, updateNewsService, deleteNewsService, likeNewsService, deslikeNewsService }
//tudo que é feito no banco rola aqui "são as querys do sql"