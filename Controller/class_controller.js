const classModel = require("../Model/class")
const childModel = require("../Model/child")
const teacherModel = require("../Model/teacher")
exports.getAllClasses =(req, res,next) => {
    classModel.find({}).then((data) => {
        res.status(200).json({data:data})
    }
    ).catch((err) => {
       next(err)
    })

}

exports.getClassById = (req, res,next) => {
    classModel.findOne({_id:req.params.id}).then((data) => {
        res.status(200).json({data:data})
    }
    ).catch((err) => {
       next(err)
    })
}

exports.createClass = (req,res,next)=> {
    let aclass = new classModel(req.body)
    aclass.save().then((data) => {
         res.status(200).json({data:data})
    }).catch((err) => {
         next(err)
    })
}

exports.deleteClass = (req,res,next)=> {
    classModel.deleteOne(req.params.id).then(
        (data)=>{
            res.status(200).json({status:"deleted successfully",data:data})
        }
       ).catch((err)=>{
        next(err)
       })
}

exports.deleteAllClass = (req, res,next)=>{
    classModel.deleteMany({}).then(
        (data)=>{
            res.status(200).json({status:"All records have been deleted",data:data})
        }
    ).catch((error)=>{
        next(error)
    })
}

exports.updateClass = async (req,res,next)=>{
    teacher = await teacherModel.findOne({_id:req.body.supervisor})
    children = await childModel.find({_id:{$in:req.body.children}})
    if(teacher && children.length == req.body.children.length){
        classModel.updateOne({_id:req.body._id},req.body).then((data)=>{
            res.status(200).json({status:"updated successfully",data:data})
        }
        ).catch((err)=>{
            next(err)
        })
    }
    else{
        res.status(404).json({status:"teacher or children not found"})
    }
}


exports.getClassChildrenInfo = (req, res,next) => {
    classId = req.params.id
    // get the class with the id 
    // display all the children in the array of children ids inside the class model
    classModel.findOne({_id:classId}).populate("children").then((data) => {
        res.status(200).json({data:data.children})
    }).catch((err) => {
        next(err)
    })
   
}

exports.getClassSupervisor = (req, res,next) => {
    classid = req.params.id
    
    classModel.findOne({_id:classid}).populate("supervisor").then((data) => {
        res.status(200).json({data:data.supervisor})
    }).catch((err) => {
        next(err)
    })
}   