const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

// 1- create Object from mongoose Schema
const schema = new mongoose.Schema({
    _id:{type:Number},
    name: String,
    email: String,
    password: String,
    image: String,
    role:{
        type: String,
        enum:["admin","supervisor"]
    }
});
//2-mapping
module.exports = mongoose.model("teacher", schema);
