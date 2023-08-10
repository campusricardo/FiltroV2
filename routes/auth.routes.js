
const { Router } = require('express');
const {check} = require ('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validateJWT.js');
const { login} = require('../controllers/auth.controllers.js');

const router = Router();
 router.post('/', [
    check('email', 'This is not an email xd').isEmail(),
    check('password', 'The passoword is required').not().isEmpty(),
    validateDocuments
 ], login); 



module.exports = router;