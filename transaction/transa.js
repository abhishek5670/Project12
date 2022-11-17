// import mongoose from 'mongoose';
// import express from 'express'
// const AI = express.Router();
// // mongoose.connect({ replicaSet: 'rs' })
// // const uri = 'mongodb://localhost:27017/USER';
// // await mongoose.connect(uri, { replicaSet: 'rs' });

// // await mongoose.connection.dropDatabase();

// // mongoose.connect("mongodb://localhost:27017/USER" , {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     //useCreateIndex: true,
// //   }).then(()=> console.log("MongoDb Connected ...........")).catch((error)=> console.error("MongoDB connection failed :", error.message));
// const Account = mongoose.model('Account', new mongoose.Schema({
//     name: String, balance: Number
//   }));

// // AI.patch('/update/:id', async (req,res)=>{
// //     const id = req.params.id;
// //     const Options = {new : true}
// //     const p = await Account.findById(id)
// //     const f = p.nam
// // })
// AI.patch('/update', async (req,res) =>{    
//   // Success
//      try {
//        // Fails because then A would have a negative balance
//        // await transfer('A', 'B', 2);
//        const Object={new:true}
       
//        const data = await Account.findByIdAndUpdate(req.params.id,Object);
//        res.json(data)
//      } catch (error) {
//        error.message; // "Insufficient funds: 1"
//      }
//     })

// await Account.create([{ name: 'A', balance: 5 }, { name: 'B', balance: 10 }]);

// await transfer('A', 'B', 200);

//     // The actual transfer logic
//     async function transfer(from, to, amount) {
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     try {
        
//         const opts = { session, new: true };
//         const A = await Account.
//         findOneAndUpdate({ name: from }, { $inc: { balance: -amount } }, opts);
//         if (A.balance < 0) {
//         // If A would have negative balance, fail and abort the transaction
//         // `session.abortTransaction()` will undo the above `findOneAndUpdate()`
//         throw new Error('Insufficient funds: ' + (A.balance + amount));
//         }

//         const B = await Account.
//         findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts);

//         await session.commitTransaction();
//         session.endSession();
//         // const data = await Account.find();
//         // res.json(data)
//         return { from: A, to: B };

//     } 
//     catch (error) {
//         // If an error occurred, abort the whole transaction and
//         undo any changes that might have happened
//         await session.abortTransaction();
//         session.endSession();
//         throw error; // Rethrow so calling function sees error
//     }
//     }

//     await transfer('A', 'B', 4); 

// export default AI