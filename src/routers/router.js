const {Router} = require('express');
const router = Router();
// const routerExtrato = require('./routerExtrato');
const routerTransicao = require('./routerTransicao');

// router.use('/extrato',routerExtrato );
router.use('/transicao', routerTransicao);


module.exports = router;