const {Router} = require('express');
const SaidaController = require('../controllers/saidaController');
const router = Router();

// Create
router.post('/', SaidaController.create);

// GetAll
router.get('/', SaidaController.getAll);

// GetOne
router.get('/:id', SaidaController.getOne);

// Update
router.put('/:id', SaidaController.update);

router.delete('/:id', SaidaController.delete);

module.exports = router;