// Class Data:_id(Number), name, supervisor (teacher id number), children which is array of children ids
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    supervisor: { type: Number, ref: "teacher" },
    children: [
        {
            type:Number,
            ref:"child"
        }
    ],
});

module.exports = mongoose.model("class", schema);