import express from "express"
import { createHotel,updateHotel,deleteHotel ,specificHotel,allHotel,countbycity,countbytype, gethotelrooms} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"; 
const router=express.Router();
// create a data
router.post("/",verifyAdmin,createHotel); 
// update the data
router.put("/:id",verifyAdmin,updateHotel);
// delete the data
router.delete("/:id",verifyAdmin,deleteHotel) 
// taking out a specific id
router.get("/find/:id",specificHotel)
// taking out all id's
router.get("/",allHotel)


router.get("/countbycity",countbycity)

router.get("/countbytype",countbytype)
router.get("/rooms/:id",gethotelrooms)
// async function middle(req,res,next){
//     let mw;
//     try{
//         mw=await Hotel.findById(req.params.id)
//         if(mw==null){
//             res.status(404).json("Id not found")
//         }
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
//     req.mw=mw
//     next()
// }
export default router;  