import { MongoClient } from "mongodb"

export default async function Feeds (req,res){
    if(req.method=="POST"){
        try{
            const client = await MongoClient.connect('mongodb+srv://obedchidera1010:Awsome@cluster0.awkekgn.mongodb.net/feedback')
            const db=client.db()
            // destructure teh request body
            let {firstname,lastname,age,phone}=req.body
            // validate
            if(!firstname)return res.status(400).json({msg:'pass in firstname'})
            firstname=firstname.trim()

            if(!lastname)return res.status(400).json({msg:'pass in lastname'})
            lastname=lastname.trim()

            // if(!firstname){
            //     return res.status(400).json({msg:'pass in firstname'})
            // }
            // else{
            //     firstname=firstname.trim()
            // }

            // insert into database
            const person= await db.collection('feeds').insertOne({firstname,lastname,age,phoneNo:phone})
            if(person){
                res.status(201).json({msg:'user created succesfully '})
            }

            await client.close()
        }
        catch(err){
            console.log(err);
            res.status(500).json({msg:"server error"})
        }
    }

}