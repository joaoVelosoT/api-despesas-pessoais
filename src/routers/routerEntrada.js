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

})


// Update
router.put('/:id', (req,res) => {

})

// Delete
router.delete('/:id', (req,res) => {

})

module.exports = router;