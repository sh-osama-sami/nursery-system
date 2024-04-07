const express = require ("express");
const router = express.Router();
const authController = require("../Controller/auth_controller")



router.route("/teacher/login")
    .post(authController.login)


module.exports = router;