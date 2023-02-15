const mongoose = require("mongoose")
const Schema = mongoose.Schema
const toDoItemSchema = new Schema({
    item:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('todo' ,toDoItemSchema)