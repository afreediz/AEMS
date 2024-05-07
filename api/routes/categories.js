const router = require('express').Router()
const { getCategories, addCategories, updateCategories, deleteCategories} = require('../controllers/categories.js')

router.get('/', getCategories)
router.post('/', addCategories)
router.put('/:id', updateCategories)
router.delete('/:id', deleteCategories)

module.exports = router