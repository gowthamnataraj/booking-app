import express from "express"
import {updateUser,deleteUser,specificUser,allUser} from "../controllers/user.js"
import { verifyToken, verifyUser ,verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

router.delete("/:id",verifyAdmin,deleteUser)

router.put("/:id",verifyUser,updateUser)

router.get("/:id",verifyUser,specificUser)

router.get("/",allUser)

// router.get("/checkauth",verifyToken,(req,res,next)=>{
// res.send("hello user,you are logged in")
// })


// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("logged in and u are able to delete your account") 
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hi admin u are able to delete all account")
// })
export default router; 

 