const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/isAuth')

const authRoutes = require('./auth')
const adminRoutes = require('./admin')
const uiuxRoutes = require('./uiux')

router.use('/auth', authRoutes)
router.use('/admin', isAuthenticated, adminRoutes)
router.use('/uiux', isAuthenticated, uiuxRoutes)

module.exports = router