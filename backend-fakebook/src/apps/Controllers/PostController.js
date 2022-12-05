const Post = require('../models/Post')

class PostController {
    async store(req, res) {
        const insertedPost = await Post.create(req.body)
        const formattedPosts = {
            id: insertedPost.id,
            avatar: '/src/assets/perfil.jpg',
            name: "João Lucas",
            time: insertedPost.createdAt,
            text: insertedPost.text,
            url: insertedPost.picture,
            likes: 0,
            comments: 0,
            shareds: 0
        }

        return res.status(200).json(formattedPosts)
    }

    async upload(req, res) {
        const { filename, size } = req.file
        if ((size / 1024 / 1024) > 1) {
            return res.send({ message: "Foto não deve excerder 1mb de tamanho" })
        }
        return res.send({ image: `uploads/${filename}` })
    }

    async getPosts(req, res) {
        const allPosts = await Post.findAll({
            order: [['id', 'DESC']]
        })

        if (!allPosts) {
            return res.send({ message: "Postagem não encontrada", error: "Impossivel fazer uma postagem vazia" })
        }

        const formattedPosts = []

        allPosts.forEach(element => {
            formattedPosts.push({
                id: element.id,
                avatar: '/src/assets/perfil.jpg',
                name: "João Lucas",
                time: element.createdAt,
                text: element.text,
                url: element.picture,
                likes: 0,
                comments: 0,
                shareds: 0
                
            })
        });

        return res.status(200).json(formattedPosts)
    }
}

module.exports = new PostController