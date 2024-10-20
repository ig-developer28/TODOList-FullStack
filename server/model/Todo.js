import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data : {
        type:String,
        required : true
    },
    done:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type : Date,
        default : Date.now
    },
    name: {
        type: String,  // Reference to another model
        ref: 'user',  // Model name to reference
        required: true
      }
})

const todo = mongoose.model('todo',TodoSchema)

export default todo;