const router = require('express').Router();
const {getCentro,postCentro,deleteCentro,putCentro} = require('../controllers/centro.controllers.js');

router.get('/', getCentro);
router.post('/',postCentro );
router.delete('/:id', deleteCentro);
router.put('/:id', putCentro);

module.exports = router;
