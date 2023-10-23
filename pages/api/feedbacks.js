import mongoose from 'mongoose';
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  // const client = new MongoClient('mongodb+srv://obedchidera1010:Awsome@cluster0.awkekgn.mongodb.net/feedback');
  // await client.connect();
  // const db = client.db();
  // const collection = db.collection('feedbacks')
  if (req.method === 'POST') {
    // get data passed aand validate the data passed 
    // const { firstName, lastName, age, phone, id } = req.body
    // console.log(req.body);
    const {firstname,lastname,phone,email}=req.body




    /* try {
 
 
       
         // validate userdata
         // if (!firstName || !lastName || !age || !phone) {
         //   res.status(442).json({ msg: "please fill in all fields" })
         // }
 
 
         const postsInsert = await collection.insertOne({ firstName:firstName, lastName:lastName, age:age, phone:phone })
         //   insert into the database using data  from the front end
         if (postsInsert) {
           res.status(201).json({ msg: "feedbacks created successfully", postsInsert });
         }
       
 
       // this condition will only run if the id  value is sent over the api
       // post the id to the database and fetch the user with that id
 
 
 
 
     }
 
 
 
     catch (error) {
       res.status(500).json({ error: 'Unable to connect to database' });
       console.log(error);
     } finally {
       await client.close();
     }
 
 
   }
 
   if (req.method === "GET") {
 
     // getting the db(databse)and collection
     const user = await collection.find({email:'obedchidera1010@gmail.com'})
     if (user) {
       let email=user.email
       res.status(200).json({ msg: 'user is registerd', user})
     }
     else {
       res.status(404).json({ msg: "user not found" })
     }
 
     //          else {
     //   res.status(405).json({ error: 'Unsupported HTTP method' });
     // }
     // making a get request
 
 
     // geeting the id passed over the api
 
   }*/

    // using .then
    let client = await MongoClient.connect('mongodb+srv://obedchidera1010:Awsome@cluster0.awkekgn.mongodb.net/feedback')
    let db= client.db()
    const name =req.body.firstname
     await db.collection('newfeed').insertOne({name:firstname,phone:phone,email:email,lastname:lastname})
     res.status(200).json({msg:"inserterd"})
    }

    if(req.method==='GET'){
      let client = await MongoClient.connect('mongodb+srv://obedchidera1010:Awsome@cluster0.awkekgn.mongodb.net/feedback')
      let db= client.db()
      const name =req.body.firstname
       let feed=await db.collection('newfeed').find().toArray()
       res.status(200).json({msg:feed})

      //  Assignment sort the feed in descending order
    }
}

