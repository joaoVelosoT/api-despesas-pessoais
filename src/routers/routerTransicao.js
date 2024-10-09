const {Router} = require('express');
const TransicaoController = require('../controllers/transicaoController');
const router = Router();

router.post('/', TransicaoController.create);
router.get('/', TransicaoController.getAll);
router.get('/:id', TransicaoController.getOne);
router.put('/:id', TransicaoController.update);
router.delete('/:id', TransicaoController.delete);


module.exports = router;