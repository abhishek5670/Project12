import express from "express";

import Warehouse from "../warehouse/warehouse.js";
import Product from "../product/product.js"

const PR = express.Router();


PR.post('/post', async (req, res,next) => {

    const search = req.body.WN;
   // const a = search.replace(/\s+/g,'')
    const b =await Warehouse.find({WN:{$regex:search,$options:'i'}})
    console.log("b...........",b[0]._id.toString())

    const data = new Product({
        Product_name: req.body.Product_name,
        MRP: req.body.MRP,
        QTY:req.body.QTY,
        // CATEGORY:req.body.CATEGORY,
        // LOW:req.body.LOW,
        // HIGH:req.body.HIGH,
        // Purchasing_detail:req.body.Purchasing_detail,
        // Cost_price:req.body.Cost_price,
        // Selling_price:req.body.Selling_price,
        // Tax_details:req.body.Tax_details,
       WN:req.body.WN,
       warehouse:b[0]["_id"].toString()
            
    })
    if(b.length > 0) 
    {
try{
    const dataToSave = await data.save();
    {res.status(200).json(dataToSave)}
}
    catch (error) {
        res.status(500).json({ message: error.message })
    }
    }


else
{
    res.status(404).json({ message: "Warehouse not found" })
}}
)

//Get all Method
PR.get('/getAll', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
PR.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Product.findById(req.params.id).populate("warehouse");
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
PR.patch('/update/:id', async (req, res) => {
    try {
        const id = req.body.id;
        var s = id
        var d = id
        console.log("p",s)
        console.log("w",d)
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// transfer by ID 
PR.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Delete by ID Method
PR.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default PR;