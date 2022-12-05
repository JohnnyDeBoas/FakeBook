const Sequelize = require('sequelize');
const DatabaseConfig = require("../configs/db")
const Post = require('../apps/models/Post')

const models = [Post]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(DatabaseConfig)
        models.map((model) => model.init(this.connection))
    }
}

module.exports = new Database()