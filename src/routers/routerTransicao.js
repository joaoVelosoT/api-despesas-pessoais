const {Router} = require('express');
const TransicaoController = require('../controllers/transicaoController');
const authenticateToken = require('../middlewares/authenticateToken');
const validateTransacao = require('../middlewares/validateTransacao');
const router = Router();

router.get('/total',authenticateToken, TransicaoController.total);
router.get('/entradas',authenticateToken, TransicaoController.totalEntradas);
router.get('/saidas', authenticateToken, TransicaoController.totalSaidas );

router.post('/',authenticateToken, validateTransacao, TransicaoController.create);
router.get('/', authenticateToken, TransicaoController.getAll);
router.get('/:id',authenticateToken, TransicaoController.getOne);
router.put('/:id', authenticateToken, TransicaoController.update);
router.delete('/:id', authenticateToken, TransicaoController.delete);


module.exports = router;