import { mongoose } from 'mongoose';
//import {nanoid} from 'nanoid';

const dataSchema = new mongoose.Schema({
    WN: {type:String},

    Phone: {
        required: true,
        type: Number
    },
    // QTY: {
    //     required: true,
    //     type: Number
    // },
})

const Warehouse = mongoose.model('Warehouse', dataSchema)

export default Warehouse;