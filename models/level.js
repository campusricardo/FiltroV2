const {Schema, model} = require('mongoose');

const levelSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

    ruta:{
        type: Schema.Types.ObjectId,
        ref: 'rutas'
        

    },
    duracion: {
        type: Number
    },

    estado: {
        type: Boolean,
        default: true
    }



});


module.exports = model('levels', levelSchema);
