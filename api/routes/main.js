const router = require('express').Router()
const {Home, AboutUs, Contact} = require('../controllers/uiux')
const {addParticipants} = require('../controllers/participants'
)
// These are the participants accessable routes.
router.get('/', Home.getPage)
router.get('/about-us', AboutUs.getPage)
router.get('/contact', Contact.getPage)
router.post('/register', addParticipants)

module.exports = router