const {Router} = require('express');
const TransacaoController = require('../controllers/transacao-controller');
const TokenAuthenticate = require('../middlewares/token-authenticate');
const TransacaoValidate = require('../middlewares/transacao-validate');
const router = Router();

router.get('/total',TokenAuthenticate, TransacaoController.total);
router.get('/entradas',TokenAuthenticate, TransacaoController.totalEntradas);
router.get('/saidas', TokenAuthenticate, TransacaoController.totalSaidas );

router.get('/todastransferencias',TokenAuthenticate, TransacaoController.todasTransacoes);
router.get('/todasentradas',TokenAuthenticate, TransacaoController.todasEntradas);
router.get('/todassaidas',TokenAuthenticate, TransacaoController.todasSaidas);



router.post('/',TokenAuthenticate, TransacaoValidate, TransacaoController.create);
router.get('/', TokenAuthenticate, TransacaoController.getAll);
router.get('/:id',TokenAuthenticate, TransacaoController.getOne);
router.put('/:id', TokenAuthenticate, TransacaoController.update);
router.delete('/:id', TokenAuthenticate, TransacaoController.delete);


module.exports = router;