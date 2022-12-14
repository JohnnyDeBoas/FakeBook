const express = require('express');
// const cors = require('cors');
const routes = require('./routes');
require('./db/index');

class App{
    constructor(){
        this.server = express();
        this.server.get('/',(request, response) => {
            return response.json({message: 'server is up'})
        })
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json())
        // this.server.use(cors())
    }

    routes() {
        this.server.use(routes)
    }
}

module.exports = new App().server;