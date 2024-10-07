const {Router} = require('express');
const router = Router();
const routerEntrada = require('./routerEntrada')

router.use('/entrada', routerEntrada);



module.exports = router;