const router = require("express").Router();

const { getAdmin } = require("../controllers/user");

router.get('/get-admin', getAdmin);

module.exports = router