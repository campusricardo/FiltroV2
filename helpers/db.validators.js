const Role = require ('../models/role.js');
const Camper = require('../models/camper.js');


const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`The ${rol} rol do not exist in the database`);
    }
}


 const emailExist = async( email = '' ) => {
    const existEmail = await Camper.findOne({email});
    if(existEmail){
        throw new Error(`The ${ email } email is already registered`);
    }
 }

 const userExistsById = async( id ) => {

    const userExists = await Camper.findById(id);
    if ( !userExists ) {
        throw new Error(`The user ${ id } do not exist`);
    }
}

const validateNombre = async(nombre) => {
    const findCamper = await Camper.findOne({nombre});
    if (findCamper) {
        throw new Error("The nombre already exists");
    }
}
const validateNroId = async(NroIdentificacion) => {
    const findByCCTI = await Camper.findOne({NroIdentificacion});

    if (findByCCTI) {

        throw new Error('That id is already on the database');
    }

}




module.exports = {
    isValidRole,
    emailExist,
    userExistsById,
    validateNombre,
    validateNroId
}