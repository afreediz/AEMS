const router = require('express').Router()
const { getEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/events')

router.get('/', getEvents)
router.post('/', addEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router
