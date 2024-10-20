const {Router} = require('express');
const UserController = require('../controllers/user-controller');
const TokenAuthenticate = require('../middlewares/token-authenticate');
const UserValidate = require('../middlewares/user-validate');
const router = Router();


router.post('/', UserValidate, UserController.create);
router.get('/', UserController.getAll);
router.get('/:id',UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);


router.post('/login', UserController.login);

module.exports = router;