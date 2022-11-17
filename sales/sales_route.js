import express from "express";

import Supplier from "../sales/sales.js";
const SR = express.Router();


SR.post('/post', async (req, res) => {

    const data = new Supplier({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        BillingAddress:req.body.BillingAddress,
        ShippingAddress:req.body.ShippingAddress,
        disabled:req.body.disabled
    
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

SR.get('/getAll', async (req, res) => {
    try {
        const data = await Supplier.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
SR.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Supplier.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
SR.patch('/update/:id', async (req, res) => {
    try 
    {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const h = await Supplier.findById(id)
        if (h.disabled===false)
        {

            var lk = true         
            Object.keys(updatedData).forEach((key) =>
            {
              if(!updatedData[key])
                {
                        lk = false
                        res.status(500).json({ message: error.message })
                }
            })
            if (lk)
            { 
                const result = await Supplier.findByIdAndUpdate(id, updatedData, options)
                res.send(result)
            }
        }
        
            
      
           
           
        else{res.send("this data is disabled")}
    }
    catch (error) 
    {
        res.status(500).json({ message: error.message })
    }
})

SR.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Supplier.findByIdAndUpdate(id,{disabled:true})
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default SR;