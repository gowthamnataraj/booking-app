import User from "./../models/User.js" 

export const updateUser=async(req,res)=>{
    try{
        const savedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(savedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const deleteUser=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        // await req.mw.remove();
        res.status(200).json("User deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const specificUser=async(req,res)=>{
    try{
        const finded=await User.findById(req.params.id)
        res.status(200).json(finded)//node js is stateless ... we have to show the state
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const allUser=async(req,res)=>{
    try{
        const allUser=await User.find();
        res.status(200).json(allUser)
    }
    catch(err){
        res.status(500).json(err)
    }
}
