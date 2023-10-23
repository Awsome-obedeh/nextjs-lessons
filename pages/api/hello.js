// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try{
    if(req.method==="POST"){
    const {firstName,lastName}=req.body.userDetails
    const firstname=req.body.userDetails;
    // validate
    if(firstName===undefined){
        res.status(203).json({errorMsg:"please fill in first name"})
    }
    const lastname=req.body.userDetails
    console.log(firstName);
    console.log(lastName);
    res.status(201).json({msg:"user data stored successfully"})
}



}

catch(err){
    console.log(err);
}

}
