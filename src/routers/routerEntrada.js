const {Router} = require('express');
const EntradaController = require('../controllers/entradaController');
const router = Router();


// Create
router.post('/', (req,res) => {
    EntradaController.create(req,res);
})


// GetAll
router.get('/', (req,res) => {
    EntradaController.getAll(req,res);
})



// GetOne
router.get('/:id', (req,res) => {
    EntradaController.getOne(req,res);
})


// Update
router.put('/:id', (req,res) => {
    EntradaController.update(req,res);
})

// Delete
router.delete('/:id', (req,res) => {
    EntradaController.delete(req,res);
})

module.exports = router;