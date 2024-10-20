import User from "../model/User.js"

export const handleSignup=async (req,res)=>{
    // const {name,password}=req.body;
    console.log(req.body)
    try{
        const newTodo = await User.create({
            name:req.body.name,
            password:req.body.password
        })
        await newTodo.save()
    
        return res.status(200).json(newTodo)
    }catch(error){
        console.log("ahidgvefi"+error.stack)
        return res.status(500).json("not possible")
    }
}

export const handlelogin=async (req,res)=>{
    try{
        const verify=await User.find({name:req.body.name,password:req.body.password})
        if(verify){
            return res.status(200).json({message:"Logged in successfully"})
        }
        else{
            return res.status(401).json({message:"Unauthorized"})
        }
    }
    catch{
        return res.status(500).json(error.message)
    }
}

