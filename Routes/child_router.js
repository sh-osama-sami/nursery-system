const express = require('express');
const router = express.Router();
const controller = require('../Controller/child_controller');
const { isSupervisorOrAdmin } = require("../Middlewares/auth_middleware")

router.route('/childs')
    .get(isSupervisorOrAdmin,controller.getAllChildren)
    .post(isSupervisorOrAdmin,controller.createChild)
    .put(isSupervisorOrAdmin,controller.updateChild)
    .delete(isSupervisorOrAdmin,controller.deleteAllChild)

router.route('/child/:id')
    .get(isSupervisorOrAdmin,controller.getChildById)
    .delete(isSupervisorOrAdmin,controller.deleteChild)

module.exports = router;