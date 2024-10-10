const {Router} = require('express');
const router = Router();
// const routerExtrato = require('./routerExtrato');
const routerTransicao = require('./routerTransicao');
const routerUser = require('./routerUser');

// router.use('/extrato',routerExtrato );
router.use('/transicao', routerTransicao);
router.use('/user', routerUser);

module.exports = router;