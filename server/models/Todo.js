import mongoose, { Mongoose } from 'mongoose';

const TodoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
});

const todo = new mongoose.model('todo',TodoSchema);

export default todo; 