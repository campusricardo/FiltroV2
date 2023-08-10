const {Schema, model} = require('mongoose');

const camperSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

    tipoIdentificacion:{
        type: Boolean,
        default: true
    },
    
    NroIdentificacion: {
        type: Number,
        default: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    level: { 
        type: Schema.Types.ObjectId,
        ref: 'levels'
    },

    levelState: {
        type: Boolean,
    },

    estado: {
        type: Boolean
    },

    imagen: {
        type: String
    },

    rol: {
        type: String,
        default: 'USER'
    },

    promedio: {
        type: Number
    }
});


module.exports = model('campers', camperSchema);
