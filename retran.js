// import startSession  from 'mongoose';
// import connect from 'mongoose'
// import connection from 'mongoose'
// import model from 'mongoose'
// const {Schema} = mongoose
// import mongoose from 'mongoose';
// const uri = 'mongodb+srv://Abhishek5670:Abhishek5670@cluster0.cmkiy77.mongodb.net/User';
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // replicaSet: 'rs',
//   // useCreateIndex: true,
// })


// // await connection.dropDatabase();

// const Account = mongoose.model('Account', new mongoose.Schema({
//   name: String, balance: Number
// }));


// // Insert accounts and transfer some money
// await Account.create([{ name: 'A', balance: 5 }, { name: 'B', balance: 10 }]);

// await transfer('B', 'A', 4); // Success
// // try {
// //   // Fails because then A would have a negative balance
// //   await transfer('A', 'B', 2);
// // } catch (error) {
// //   error.message; // "Insufficient funds: 1"
// // }

// // The actual transfer logic
// async function transfer(from, to, amount) {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   try {
//     const opts = { session, new: true };
//     const A = await Account.findOneAndUpdate({ name: from }, { $inc: { balance: -amount } }, opts);
//     if (A.balance < 0) {
//       // If A would have negative balance, fail and abort the transaction
//       // `session.abortTransaction()` will undo the above `findOneAndUpdate()`
//       throw new Error('Insufficient funds: ' + (A.balance + amount));
//     }

//     // const B = await Account.findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts);

//     await session.commitTransaction();
//     session.endSession();
//     return { from: A, to: B };
//   } catch (error) {
//     // If an error occurred, abort the whole transaction and
//     // undo any changes that might have happened
//     await session.abortTransaction();
//     session.endSession();
//     throw error('transaction is abort'); // Rethrow so calling function sees error
//   }
// } 