const express = require('express')
const router = express.Router()
const tourismController = require('../controllers/tourism.controller');

router.get('/', tourismController.findAll);
router.post('/', tourismController.create);
router.get('/:id', tourismController.findById);
router.put('/:id', tourismController.update);
router.delete('/:id', tourismController.delete);

module.exports = router