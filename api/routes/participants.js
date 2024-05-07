const router = require('express').Router()
const {getParticipants, addParticipants, updateParticipants, deleteParticipants} = require('../controllers/participants')

router.get('/', getParticipants)
router.post('/', addParticipants)
router.put('/:id', updateParticipants)
router.delete('/:id', deleteParticipants)

module.exports = router