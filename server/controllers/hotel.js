import Hotel from "./../models/Hotel.js" 
import Room from "../models/Room.js";
export const createHotel=async(req,res)=>{
    const newhotel=new Hotel(req.body)
    try{
        	const savedhotel=await newhotel.save();
            res.status(200).json(savedhotel)
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const updateHotel=async(req,res)=>{
    try{
        const savedhotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(savedhotel)
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const deleteHotel=async(req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        // await req.mw.remove();
        res.status(200).json("hotel deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const specificHotel=async(req,res)=>{
    try{
        const finded=await Hotel.findById(req.params.id)
        res.status(200).json(finded)//node js is stateless ... we have to show the state
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const allHotel=async(req,res)=>{
    const {min,max,...others}=req.query
    try{
        // const allhotel=await Hotel.find(req.query).limit(req.query.limit);
        const allhotels=await Hotel.find({...others,cheapestPrice: {$gt:min |1,$lt:max||999}}).limit(req.query.limit)
        res.status(200).json(allhotels)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const countbycity=async(req,res)=>{
    const cities=req.query.cities.split(",")
    // console.log(cities)
    try{
        const list=await Promise.all(cities.map((city)=>{return Hotel.countDocuments({city:city})}))
        // const list =await Promise.all(cities.map((city)=>{return Hotel.countDocuments({city:city})}))
        res.status(200).json(list)
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const countbytype=async(req,res)=>{
    try{
        const typehotel=await Hotel.countDocuments({type:"hotel"})
        const typeapartment=await Hotel.countDocuments({type:"apartment"})
        const typeresort=await Hotel.countDocuments({type:"resort"})
        const typevilla=await Hotel.countDocuments({type:"villa"})
        const typecabin=await Hotel.countDocuments({type:"cabin"})

        res.status(200).json(
            [
                {type:"hotel",count:typehotel},
                {type:"apartment",count:typeapartment},
                {type:"resort",count:typeresort},
                {type:"villa",count:typevilla},
                {type:"cabin",count:typecabin}
            ]
        )
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const gethotelrooms=async(req,res)=>{
    try{
        const hot=await Hotel.findById(req.params.id)
        const rooml=await Promise.all(hot.rooms.map(room=>{
            return Room.findById(room)
        }))
        res.status(200).json(rooml)
        // console.log(rooml)
    }
    catch(err){
        res.status(500).json(err)
    }
}