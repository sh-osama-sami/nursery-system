const express = require('express');
const router = express.Router();
const controller = require('../Controller/child_controller');

router.route('/childs')
    .get(controller.getAllChildren)
    .post(controller.createChild)
    .put(controller.updateChild)
    .delete(controller.deleteAllChild)

router.route('/child/:id')
    .get(controller.getChildById)
    .delete(controller.deleteChild)

module.exports = router;