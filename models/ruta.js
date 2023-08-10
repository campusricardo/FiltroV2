const {Schema, model, SchemaType} = require('mongoose');

const rutaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },

    centro: {
        type: Schema.Types.ObjectId,
        ref: 'centros'
    }


});
module.exports = model('centros', rutaSchema);
