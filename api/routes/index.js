const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/isAuth')

const authRoutes = require('./auth')
const adminRoutes = require('./admin')

router.use('/auth', authRoutes)
router.use('/admin', isAuthenticated, adminRoutes)

module.exports = router