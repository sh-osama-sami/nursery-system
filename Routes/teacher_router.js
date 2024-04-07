const express = require("express");
const controller = require("./../Controller/teacher_controller");
const router = express.Router();
const {isAdmin,isAdminOrTeacher} = require("./../Middlewares/auth_middleware");

router.route("/teachers")
  .get(isAdmin,controller.getAllTeachers)
  .post(isAdmin,controller.createTeacher)
  //check if the id of the teacher is the same id as the updated object 
  .put(isAdminOrTeacher,controller.updateTeacher)
  .delete(isAdminOrTeacher,controller.deleteAllTeacher);

router.route("/teacher/:id")
    .get(isAdmin,controller.getTeacherById)
    //check if the id of the teacher is the same id as the deleted object 
    .delete(isAdminOrTeacher,controller.deleteTeacher);

router.get("/teachers/supervisor",isAdmin ,controller.getAllSupervisors);

module.exports = router;
