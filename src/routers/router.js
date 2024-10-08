const {Router} = require('express');
const router = Router();
const routerEntrada = require('./routerEntrada');
const routerSaida = require('./routerSaida');
const routerExtrato = require('./routerExtrato');

router.use('/entrada', routerEntrada);
router.use('/saida', routerSaida);
router.use('/extrato',routerExtrato );

module.exports = router;