const express = require('express');
const cors = require('cors');
const {connectToDB} = require('../database/config.js');


class Server {

    constructor() {
        this.app = express();


        this.port = process.env.PORT;

        this.paths = {
            camper: '/camper',
            centro: '/centro',
            ruta: '/ruta',
            level: '/level',
            role: '/role',
            login: '/login',

        }

        this.dbConnect();
        this.middlewares();
        this.routes();

    }

    async dbConnect() {
         await connectToDB();
    }

    middlewares() {
    this.app.use(express.json());
    this.app.use(cors());

     
    }

    routes() {
        this.app.use(this.paths.camper, require('../routes/camper.routes.js'));
        this.app.use(this.paths.centro, require('../routes/centro.routes.js'));
        this.app.use(this.paths.login, require('../routes/auth.routes.js'));
    }


    listen() {


        this.app.listen(this.port, ()=> {
            console.log(this.port);
        });

    }
}

module.exports = Server;