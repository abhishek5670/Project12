import { mongoose} from 'mongoose';
//import { Schema } from 'mongoose';
//import {nanoid} from 'nanoid';
//import mongooseUniqueValidator from "mongoose-unique-validator";

const dataSchema = new mongoose.Schema({
    // _id : Number,
    User_name:{
        required: true,
        type: String

    },
    Phone_number: {
        required: true,
        min:10,
        max:10,
        //background:true,
        type: Number
    },
    Email: {
        required: true,
        //unique: true,
        //background:true,
        type: String
    },
    Address:{
        required : true,
        type : String

    },
    Age:{
        required : true,
        type: Number
    },
    Gender:{
        required: true,
        type: String
    },
    Company_name:{
        type :String
    },
    item:
    {required: true,
     type: Number
    }
    
},{typekey:'$type'})
//dataSchema.plugin(mongooseUniqueValidator)
const User = mongoose.model('User', dataSchema)

export default User;