const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/isAuth')

const authRoutes = require('./auth')
const adminRoutes = require('./admin')
const mainRoutes = require('./main')

router.use('/auth', authRoutes)
router.use('/admin', isAuthenticated, adminRoutes)
router.use('/', mainRoutes)

module.exports = router