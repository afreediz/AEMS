const router = require("express").Router();

const { getAdmin, Profile, dashboardDetails } = require("../controllers/admin");
const uiuxRoutes = require('./uiux')
const participantsRoutes = require('./participants')
const eventsRoutes = require('./events');
const categoryRoutes = require('./categories')

// Only admin can access these routes
router.get('/get-admin', getAdmin);
router.get('/profile', Profile)
router.get('/dashboard-details', dashboardDetails)

// Admin operations routes
router.use('/uiux', uiuxRoutes)
router.use('/events', eventsRoutes)
router.use('/participants', participantsRoutes)
router.use('/categories', categoryRoutes)

module.exports = router