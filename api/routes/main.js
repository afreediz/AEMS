const router = require('express').Router()
const {Home, AboutUs, Contact, Events, Location} = require('../controllers/uiux')
const {addParticipants} = require('../controllers/participants'
)
// These are the participants accessable routes.
router.get('/home', Home.getPage)
router.get('/about-us', AboutUs.getPage)
router.get('/contact', Contact.getPage)
router.get('/events', Events.getPageByCategory)
router.get('/register-events', Events.getRegisterEvents)
router.get('/location', Location.getPage)
router.post('/register', addParticipants)

module.exports = router