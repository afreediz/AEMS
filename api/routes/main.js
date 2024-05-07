const router = require('express').Router()
const {Home, AboutUs, Contact} = require('../controllers/uiux')

// These are the participants accessable routes.
router.get('/', Home.getPage)
router.get('/about-us', AboutUs.getPage)
router.get('/contact', Contact.getPage)

module.exports = router