const router = require("express").Router();

const { getAdmin, Profile } = require("../controllers/admin");

router.get('/get-admin', getAdmin);
router.get('/profile', Profile)

module.exports = router