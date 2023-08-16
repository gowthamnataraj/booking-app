import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";


export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body)

    try{
        const saveroom=await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveroom._id}})
        }
        catch{
            res.status(500).json(err)
        }
        res.status(200).json(saveroom)
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const updateRoom=async(req,res)=>{
        try{
            const savedroom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true})
            res.status(200).json(savedroom)
        }    
    catch(err){
        res.status(500).json(err)
    }
}
export const deleteRoom=async(req,res)=>{
    const hotelId=await req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        }
        catch{
            res.status(500).json(err)
        }
        // await req.mw.remove();
        res.status(200).json("Room deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const specificRoom=async(req,res)=>{
    try{
        const finded=await Room.findById(req.params.id)
        res.status(200).json(finded)//node js is stateless ... we have to show the state
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const allRoom=async(req,res)=>{
    try{
        const allRoom=await Room.find();
        res.status(200).json(allRoom)
    }
    catch(err){
        res.status(500).json(err)
    }
}