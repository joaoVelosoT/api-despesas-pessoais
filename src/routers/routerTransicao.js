const {Router} = require('express');
const TransicaoController = require('../controllers/transicaoController');
const authenticateToken = require('../middlewares/authenticateToken');
const router = Router();

router.get('/total',TransicaoController.total);
router.get('/entradas',TransicaoController.totalEntradas);
router.get('/saidas', TransicaoController.totalSaidas );

router.post('/',authenticateToken, TransicaoController.create);
router.get('/', TransicaoController.getAll);
router.get('/:id', TransicaoController.getOne);
router.put('/:id', TransicaoController.update);
router.delete('/:id', TransicaoController.delete);


module.exports = router;