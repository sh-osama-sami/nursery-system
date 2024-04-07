const express = require('express');
const router = express.Router();
const controller = require('../Controller/class_controller');

router.route('/classes')
    .get(controller.getAllClasses)
    .post(controller.createClass)
    .put(controller.updateClass)
    .delete(controller.deleteAllClass)

router.route('/class/:id')
    .get(controller.getClassById)
    .delete(controller.deleteClass)

router.get("/classes/child/:id", controller.getClassChildrenInfo);

router.get("/classes/teacher/:id", controller.getClassSupervisor);

module.exports = router;