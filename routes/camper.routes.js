const {Router} = require('express');
const {check} = require ('express-validator');
const {validateJWT} = require('../middlewares/validateJWT.js');
const {getCamper,postCamper,deleteCamper,putCamper} = require('../controllers/camper.controllers.js');
const { validateDocuments  } = require('../middlewares/validate.documents.js');
const {isValidRole,emailExist,  validateNombre, validateNroId} = require('../helpers/db.validators.js');
const {isTrainerRole, isGerenteRole} = require('../middlewares/validate.role.js');

const router = Router();
router.get('/', getCamper);
router.post("/",
// [
//     validateJWT,
//     isTrainerRole,
//     check('nombre', 'Nombre is required or there is already someone in the database with that name').not().isEmpty(),
//     check('nombre').custom(validateNombre),
//     check('NroIdentificacion').isLength({min: 10}),
//     check('NroIdentificacion').isLength({max: 10}),
//     check('NroIdentificacion').custom(validateNroId),
//     check('email', 'El email es obligatorio').isEmail(),
//     check('email').custom(emailExist),
//     check('password', 'El password es obligatorio').not().isEmpty(),
//     check('level', 'The level must be a MongoId').isMongoId(),
//     check('levelState', 'The levelState must be a Boolean').isBoolean(),
//     check('imagen').not().isEmpty(),
//     check('rol').custom(isValidRole),
//     validateDocuments,
// ]
// ,
  postCamper);

router.delete('/:id',[
    validateDocuments,
    validateJWT,
    isGerenteRole
], deleteCamper);

router.put('/', putCamper);

module.exports = router;

