const { isValidObjectId } = require('mongoose');
const Camper = require('../models/camper.js');
const { ObjectId } = require('mongoose').Types;
const bcrypt = require('bcryptjs');

const getCamper = async(req,res) => {
      

    res.json({
       "a": "a"
    });
        
    
}

const postCamper = async(req,res) => {
    const {nombre, tipoIdentificacion, NroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio} = req.body;
    const error = {};
try {


    const data = {
        nombre: typeof nombre == 'string'? nombre: error.nombre = 'Type of nombre is wrong',
        tipoIdentificacion: typeof tipoIdentificacion == 'boolean'? tipoIdentificacion: error.tipoIdentificacion = 'Type of identification is not a boolean',
        NroIdentificacion: typeof NroIdentificacion == 'number' ? NroIdentificacion : error.NroIdentificacion = 'The id type is incorrect',
        email: typeof email == 'string' ? email: error.email = 'The email type is wrong',
        password: typeof password == 'string' ? password: error.password = 'The password type is wrong',
        level: isValidObjectId(level) ? new ObjectId(level) : error.level = "The level is not a ObjectId",
        levelState: typeof levelState == 'boolean'? levelState: error.levelState = 'The levelState is wrong',
        estado: typeof estado == 'boolean' ? estado : error.estado = 'The state is wrong',
        imagen: typeof imagen == 'string' ? imagen: error.imagen = 'The image type is wrong' ,
        rol: typeof rol == 'string' ? rol: error.rol = 'The rol type is wrong',
        promedio: Number.isInteger(promedio) ? promedio : error.promedio = 'The average type is wrong'
    }

 const errorsSize = Object.keys(error).length;
     if (errorsSize === 0 ) {
        const camper = new Camper(data);
        const salt = bcrypt.genSaltSync();
        camper.password = bcrypt.hashSync(password, salt);
        await camper.save();
        res.json({
            "message":"Camper Registeres successfully"});
     } else {
        res.json({
         total: errorsSize,
            error});

    
     }
        } catch (error) {
            console.log(error.message);
            res.json({
                message: "?"
            })
        }
}


 const deleteCamper = async(req,res) => {

    try{

        const {id} = req.params;
        const camper = await Camper.findById(id);
        if (camper.rol !== "gerenteRol"){
            
            const result = await Camper.findByIdAndUpdate(id,{estado: false});
            res.json({msg: "Camper deleted succefully"});
            
        }

    } catch(error) {


        console.log(error.message);

    }


}

const putCamper = async(req, res) => {

    const {nombre, descripcion, estado, ciudad} = req.body;
    const data = {
        nombre,
        descripcion,
        estado,
        ciudad
    }
    try{

        const {id} = req.params;

        const Camper = await Camper.findByIdAndUpdate(id, data);

        res.json({
            "message": "Camper Updated"
        })


    } catch(error) {

        res.json({
            "message": "cannot update"
        })


    }
}

module.exports = {
    getCamper,
    postCamper,
    deleteCamper,
    putCamper
    
}