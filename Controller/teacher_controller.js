const teacherModel = require("../Model/teacher")
const classModel = require("../Model/class")

exports.getAllTeachers = (req, res,next) => {

  teacherModel.find({}).then((data)=>{
    res.status(200).json({data:data})
  }).catch((err)=>{
    next(err)
  })
};

exports.getTeacherById = (req, res,next) => {
  teacherModel.findById(req.params.id).then((data)=>{
    res.status(200).json({data:data})
  }).catch((err)=>{
    next(err)
  })
};

exports.createTeacher = (req, res,next) => {
  teacher = new teacherModel(req.body)
  teacher.save().then((data)=>{
    res.status(200).json({data:data})
  }).catch((err)=>{
    next(err)
  })
};

exports.deleteTeacher = (req, res,next) => {
  
  teacher.deleteOne(req.params.id).then((data)=>{
    if (req.token.role == "teacher" && req.token._id != req.body._id )
      throw Error("you cannot delete another teacher ");
    else 
      res.status(200).json({data:data})
  }).catch((err)=>{
    next(err)
  })
};

exports.deleteAllTeacher = (req, res,next) => {

  teacher.deleteMany({}).then((data)=>{
    res.status(200).json({data:data})
  }).catch((err)=>{
    next(err)
  })
};

exports.updateTeacher = (req, res,next) => {
 
    teacherModel.updateOne(req.body.id,req.body).then((data)=>{
      if(req.token.role == "teacher" &&  req.token._id != req.body.id )
        throw new Error("you cannot edit another teacher");
      else
        res.status(200).json({data:data})
    }
    ).catch((err)=>{
      next(err)
    })
 
 
};


exports.getAllSupervisors = (request, response, next) => {
    // using class model get all supervisors of classes
    classModel.find({}).populate("supervisor").then((data)=>{
        response.status(200).json({data:data})
    }).catch((err)=>{
        next(err)
    })
};
