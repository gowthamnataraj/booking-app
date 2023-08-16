import Users from "./../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
// register
export const register=async(req,res)=>{
    try{

        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=new Users({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        res.status(200).send("User created")
    }
    catch(err){
        res.status(500).json(err)
    }
}

// login
export const login=async(req,res)=>{
    try{
        const user=await Users.findOne({username:req.body.username})
        if(!user){
            res.status(404).send("NO user found")
        }
        const correctPass=await bcrypt.compare(req.body.password,user.password)
        if(!correctPass){
            res.status(400).send("Wrong password")
        }
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
              

        const {password,isAdmin,...otherdetails}=user._doc;
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...otherdetails});
        // res.status(200).json({...otherdetails})
    }
    catch(err){ 
        res.status(500).json(err)
    }
} 

