import express from "express"
import { createRoom,updateRoom,deleteRoom,allRoom,specificRoom} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

router.post("/:hotelid",verifyAdmin,createRoom); 
// update the data
router.put("/:id",verifyAdmin,updateRoom);
// delete the data
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom) 
// taking out a specific id
router.get("/:id",specificRoom)
// taking out all id's
router.get("/",allRoom)
export default router;
