const express = require('express');
const router = express.Router();
const controller = require('../Controller/class_controller');
const { isSupervisorOrAdmin , isAdmin} = require("../Middlewares/auth_middleware")
router.route('/classes')
    .get(isSupervisorOrAdmin,controller.getAllClasses)
    .post(isAdmin,controller.createClass)
    .put(isSupervisorOrAdmin,controller.updateClass)
    .delete(isAdmin,controller.deleteAllClass)

router.route('/class/:id')
    .get(isSupervisorOrAdmin,controller.getClassById)
    .delete(isAdmin,controller.deleteClass)

router.get("/classes/child/:id", isSupervisorOrAdmin, controller.getClassChildrenInfo);

router.get("/classes/teacher/:id",isSupervisorOrAdmin, controller.getClassSupervisor);

module.exports = router;