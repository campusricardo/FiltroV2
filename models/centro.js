const {Schema, model} = require('mongoose');

const centroSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

    descripcion:{
        type: String,
        required: [true, 'La descripcion es requerida']

    },
    
    estado: {
        type: Boolean,
        default: true
    },

    ciudad: {
        type: String
    }



});


module.exports = model('centros', centroSchema);
