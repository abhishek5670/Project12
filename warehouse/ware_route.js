import express from "express";

import Warehouse from "./warehouse.js";
const WI = express.Router();


WI.post('/post', async (req, res) => {
   // console.log('comapanyname')
    const data = new Warehouse({
        WN: req.body.WN,
        Phone: req.body.Phone,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
WI.get('/getAll', async (req, res) => {
    try {
        const data = await WI.find();
        res.json(data);
      //  const risk = await Risk.findById(req.params.riskId).populate("Company")
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
WI.get('/getOne/:id', async (req, res) => {
    try {
        const data = await WI.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
WI.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await WI.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
WI.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await WI.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default WI;