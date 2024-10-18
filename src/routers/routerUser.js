const {Router} = require('express');
const UserController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');
const validateUser = require('../middlewares/validateUser');
const router = Router();


router.post('/', validateUser, UserController.create);
router.get('/', UserController.getAll);
router.get('/:id',UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);


// router.post('/login', UserController.login);

module.exports = router;