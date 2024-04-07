const childModel = require('../Model/child')

exports.getAllChildren =(req, res,next) => {
    childModel.find({}).then((data) => {
        res.status(200).json({data:data})
    }
    ).catch((err) => {
       next(err)
    })

}

exports.getChildById = (req, res,next) => {
   childModel.findOne({_id:req.params.id}).then((data) => {
        res.status(200).json({data:data})
    }
    ).catch((err) => {
       next(err)
    })
}

exports.createChild = (req,res,next)=> {
   let child = new childModel(req.body)
    child.save().then((data) => {
         res.status(200).json({data:data})
    }).catch((err) => {
         next(err)
    })
}

exports.deleteChild = (req,res,next)=> {
   childModel.deleteOne({_id:req.params.id}).then(
    (data)=>{
        res.status(200).json({status:"deleted successfully",data:data})
    }
   ).catch((err)=>{
    next(err)
   })
}

exports.deleteAllChild = (req, res,next)=>{
    childModel.deleteMany({}).then(
        (data)=>{
            res.status(200).json({status:"All records have been deleted",data:data})
        }
    ).catch((error)=>{
        next(error)
    })
} 

exports.updateChild =(req,res,next)=>{
    id = req.body._id
    childModel.updateOne({_id:id},req.body).then((data)=>
    {
        res.status(200).json({data:data})
    }
    ).catch((err)=>{
        next(err)
    })
}