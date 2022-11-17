import  mongoose from 'mongoose';
const { Schema} = mongoose
//import {nanoid} from 'nanoid';

const dataSchema = new mongoose.Schema({
    Product_name: {type:String},

    MRP: {
        required: true,
        type: Number
    },
    QTY: {
        required: true,
        type: Number
    },
    // CATEGORY:{
    //     required : true,
    //     type : String

    // },
    // LOW:{
    //     required : true,
    //     type: Number
    // },
    // //NOEMAL:{
    //   //  required: true,
    //     //type: Number
    // //},
    // HIGH:{
    //     required: true,
    //     type: Number
    // },
    // Purchasing_detail:{
    //     required: true,
    //     type:String
    // },
    // Cost_price:{
    //     required : true,
    //     type: Number
    // },
    // Selling_price:{
    //     required:true,
    //     type: Number
    // },
    // Tax_details:{
    //     required:true,
    //     type: Number
    // }
    warehouse:[{
        type : Schema.Types.ObjectId,
        ref :'Warehouse',
        required: true,

    }],
    WN:{
        type:String,
        required:true
    }

})

const Product = mongoose.model('Product', dataSchema)

export default Product;