import {MongoClient} from 'mongodb'

export default async function handler(req,res){
    try{
            //connect to mongo db
            const client=await MongoClient.connect(/*mongoDbUri*/) 
            // get databse
            const db=await client.db();

            // get collection
            const collection =await client.collection();

            // insert into db
            const result=await collection.inserOne({});
            res.status(201).json({message:"inserted successfully"})
    }
}