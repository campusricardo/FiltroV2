const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Camper = require('../models/camper.js');


const validateJWT = async(  req = request, res = response, next) => {
    const token = req.header('x-api-token-jwt');
    if ( !token ) {
        return res.status(401).json({
            msg: 'There is no token'
        });
    }
    try {
        
        const {uid} = jwt.verify( token, process.env.SECRET );

         const camper = await Camper.findById(uid);

        if(!camper) {
            return res.status(401).json({
                msg: 'No hay camper?'
            })
        }         
        console.log(camper);
        req.camper = camper; 
        console.log(req.camper);
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Invalid Token'
        })
    }


}


module.exports = {
    validateJWT
}