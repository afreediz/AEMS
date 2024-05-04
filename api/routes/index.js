const router = require('express').Router()
const { isAdmin, isAuthenticated } = require('../middlewares/isAuth')

const authRoutes = require('./auth')
const userRoutes = require('./user')
const adminRoutes = require('./admin')

router.use('/auth', authRoutes)
router.use('/user', isAuthenticated, userRoutes)
router.use('/admin', isAuthenticated, isAdmin, adminRoutes)

module.exports = router