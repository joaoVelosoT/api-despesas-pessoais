const {Router} = require('express');
const router = Router();
const routerEntrada = require('./routerEntrada');
const routerSaida = require('./routerSaida');

router.use('/entrada', routerEntrada);
router.use('/saida', routerSaida);

module.exports = router;