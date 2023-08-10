const camper = require("../models/camper");

const isTrainerRole = ( req, res, next ) => {

     if ( !req.camper) {
        return res.status(500).json({
            msg: 'You cannot pass'
        });
    } 

    const { rol, nombre } = req.camper;
    console.log(rol);
    if ( rol !== 'trainerRol' && rol !== 'gerenteRol') {
        return res.status(401).json({
            msg: `${nombre}, Only the Trainers and Managers can do this function`
        });
    }

    next();
}


const isGerenteRole = (req, res, next) => {

    if ( !req.camper) {
        return res.status(500).json({
            msg: 'You cannot pass'
        });
    } 

    const {rol, nombre} = req.camper;
    
    if ( rol !== 'gerenteRol' ) {
        return res.status(401).json({
            msg: `${nombre}, Only the Managers can do this function`
        });
    }

    next();


}

module.exports = {
    isTrainerRole,
    isGerenteRole
}