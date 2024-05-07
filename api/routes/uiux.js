const router = require('express').Router()
const { Home, AboutUs, Contact } = require('../controllers/uiux')

router.put('/home-page', Home.updatePage)
router.put('/about-us-page', AboutUs.updatePage)
router.put('/contact-page', Contact.updatePage)

module.exports = router