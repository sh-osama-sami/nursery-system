// Child Data: _id(Number), fullName, age , level (one of PreKG,KG1,KG2), address (city,street and building)
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: Number,
    fullName: String,
    age: Number,
    level:{
        type: String,
        enum: ["PreKG", "KG1", "KG2"],
    },
    address: {
        city: String,
        street: String,
        building: String,
    },
});

module.exports = mongoose.model("child", schema);