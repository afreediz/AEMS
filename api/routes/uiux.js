const router = require('express').Router()
const { Home, AboutUs, Contact, Location } = require('../controllers/uiux')

router.put('/home-page', Home.updatePage)
router.put('/about-page', AboutUs.updatePage)
router.put('/contact-page', Contact.updatePage)
router.put('/location-page', Location.updatePage)

module.exports = router