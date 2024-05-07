const router = require("express").Router();

const { getAdmin, Profile, dashboardDetails } = require("../controllers/admin");
const uiuxRoutes = require('./uiux')
const participantsRoutes = require('./participants')
const eventsRoutes = require('./events')

// Only admin can access these routes
router.get('/get-admin', getAdmin);
router.get('/profile', Profile)
router.get('/dashboard-details', dashboardDetails)

// Admin operations routes
router.use('/uiux', uiuxRoutes)
router.use('/events', eventsRoutes)
router.use('/participants', participantsRoutes)

module.exports = router