const { isValidObjectId } = require('mongoose');
const Camper = require('../models/camper.js');
const { ObjectId } = require('mongoose').Types;
const bcrypt = require('bcryptjs');
const path =  require('path');
const { response } = require('express');
const getCamper = async(req,res) => {
      

    res.json({
       "a": "a"
    });
        
    
}

const postCamper = async(req,res = response) => {
    const {nombre, tipoIdentificacion, NroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio} = req.body;
    console.log(req.files);
    console.log(req.body);

    const error = {};
try {


    const data = {
        nombre: String(nombre) ,
        tipoIdentificacion: Boolean(tipoIdentificacion) ,
        NroIdentificacion:  Number(NroIdentificacion),
        email: String(email) ,
        password: String(password),
        level: level.length === 24 ?new ObjectId(level): error.level = "The level isn't a mongoid",
        levelState: Boolean(levelState),
        estado: Boolean(estado),
        imagen: req.files.imagen,
        rol: Boolean(rol),
        promedio: Number(promedio)
    }
    console.log(data);
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