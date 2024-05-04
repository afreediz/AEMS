const router = require('express').Router()
const { getUser, profile, updateProfile, deleteProfile } = require('../controllers/user')

router.get('/get-user', getUser)
router.get('/profile', profile)
router.put('/update-profile', updateProfile)
router.delete('/delete-profile', deleteProfile)

module.exports = router