import { MongoClient } from "mongodb";

export default async function(req,res){
    const client = new MongoClient('mongodb+srv://obedchidera1010:Awsome@cluster0.awkekgn.mongodb.net/feedback');
    await client.connect();
    const db = client.db();
    const collection=db.collection('feedbacks')
    if(req.method==="GET"){
        try{
              let id='65301b42270471ae7377f35d'
        // getting the db(databse)and collection
        const user= await  db.collection.find()
        if(user){
          res.status(200).json({msg:'user is registerd', user})
        }
        else{
          res.status(404).json({msg:"user not found"})  
        }
        }
        catch(err){
            res.status(500).json({msg:"server error"});
            console.log(err);
        }
    
        
      }

}