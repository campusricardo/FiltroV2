const {Schema, model,} = require('mongoose');

const rutaSchema = Schema({
    rol: {
        type: String,
        required: [true, 'The rol is required'],
        unique: true
    },
});
module.exports = model('roles', rutaSchema);
