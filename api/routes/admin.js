const router = require("express").Router();

const { getAdmin } = require("../controllers/admin");

router.get('/get-admin', getAdmin);

module.exports = router