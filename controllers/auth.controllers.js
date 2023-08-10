const {response} = require('express');
const Camper = require('../models/camper.js');
const bcrypt = require('bcryptjs');
const {generateJWT} = require('../helpers/generateJWT.js');

const login = async(req, res) => { 

    const {email, password} = req.body;
    try {
    const camper = await Camper.findOne({email});

    if (!camper) {
        return res.status(400).json({
            msg: "El camper o la contrasenña no existe"
        });
    }

    if (!camper.estado) {
        return res.status(400).json({
            msg: "Estado Inactivo"
        })
    }

    const validPassword = bcrypt.compareSync(password, camper.password);

    if (!validPassword) {
        return res.status(400).json({
            msg: "Incorrect Password"
        })
    }

    const token = await generateJWT(camper.id);

    res.json({
        camper,
        token
    })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: "An unespected error ocurred"
        })
    }
    
}

module.exports = {
    login
}