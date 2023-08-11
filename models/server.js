const express = require('express');
const cors = require('cors');
const {connectToDB} = require('../database/config.js');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();


        this.port = process.env.PORT;

        this.paths = {
            camper: '/api/campers',
            centro: '/api/centros',
            ruta: '/api/rutas',
            level: '/api/levels',
            role: '/api/roles',
            login: '/api/login',

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
    this.app.use(express.static('public'));

    this.app.use(fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }));
     
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