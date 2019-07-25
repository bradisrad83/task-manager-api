// //CRUD Operations

// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectId = mongodb.ObjectID;
// // SAME ABOVE/BELOW
// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectID();
// // console.log(id);
// // console.log(id.getTimestamp());
// // console.log(id.id);
// // console.log(id.id.length);
// // console.log(id.toHexString());
// // console.log(id.toHexString().length);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("unable to connect to db");
//     }
//     const db = client.db(databaseName);

//     // db.collection("users").findOne(
//     //   { _id: new ObjectID("5d36128b0e83cc400d021e40") },
//     //   (error, user) => {
//     //     if (error) return console.log("unable to fetch");
//     //     //   console.log(user);
//     //     if (!user) return console.log("unable to find user");
//     //     console.log(user);
//     //   }
//     // );

//     // db.collection("users")
//     //   .find({ age: 35 })
//     //   .toArray((error, users) => {
//     //     console.log(users);
//     //   });
//     // db.collection("users")
//     //   .find({ age: 35 })
//     //   .count((error, count) => {
//     //     console.log(count);
//     //   });

//     // db.collection("tasks").findOne(
//     //   { _id: new ObjectID("5d36136d620d3940358ae26b") },
//     //   (error, task) => {
//     //     if (error) return console.log("unable to fetch");
//     //     if (!task) return console.log("task not found");
//     //     console.log(task);
//     //   }
//     // );

//     // db.collection("tasks")
//     //   .find({ completed: false })
//     //   .toArray((error, tasks) => {
//     //     if (error) return console.log("unable to fetch");
//     //     if (!tasks) return console.log("there are no incomplete tasks");
//     //     console.log(tasks);
//     //   });

//     // const updatePromise = db.collection("users").updateOne(
//     //   { _id: new ObjectID("5d360ea41264d33f34bab020") },
//     //   {
//     //     $set: {
//     //       name: "Mike"
//     //     }
//     //   }
//     // );

//     // updatePromise
//     //   .then(result => {
//     //     console.log(result);
//     //   })
//     //   .catch(error => {
//     //     console.log(error);
//     //   });
//     // db.collection("users")
//     //   .updateOne(
//     //     { _id: new ObjectID("5d360ea41264d33f34bab020") },
//     //     {
//     //       $inc: {
//     //         age: -24
//     //       }
//     //     }
//     //   )
//     //   .then(result => {
//     //     console.log(result);
//     //   })
//     //   .catch(error => {
//     //     console.log(error);
//     //   });

//     // db.collection("tasks")
//     //   .updateMany(
//     //     {
//     //       completed: false
//     //     },
//     //     {
//     //       $set: {
//     //         completed: true
//     //       }
//     //     }
//     //   )
//     //   .then(results => {
//     //     console.log(results);
//     //   })
//     //   .catch(error => {
//     //     console.log(error);
//     //   });

//     // db.collection("users")
//     //   .deleteMany({ age: 27 })
//     //   .then(results => {
//     //     console.log(results);
//     //   })
//     //   .catch(error => {
//     //     console.log(error);
//     //   });

//     // db.collection("tasks")
//     //   .deleteOne({ description: "Grocery Shopping" })
//     //   .then(results => {
//     //     console.log(results);
//     //   })
//     //   .catch(error => {
//     //     console.log(error);
//     //   });
//   }
// );
