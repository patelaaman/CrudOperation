const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    empno:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    pass:{
        type:Number,
        require:true
    }

})

module.exports = mongoose.model("employee",empSchema)