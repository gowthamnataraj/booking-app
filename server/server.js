import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import cors from "cors"
const app =express()
dotenv.config()
app.listen(5000,()=>{
    console.log("Server started")
})
const MONGO="mongodb+srv://booking:booking123@cluster0.ahxst3s.mongodb.net/test"
mongoose.connect(MONGO,()=>{
    console.log("DB connected!")
})
mongoose.connection.on("disconnected",()=>{
    console.log("DB disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("DB connected")
})

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/server/auth",authRoute)
app.use("/server/hotels",hotelsRoute)
app.use("/server/rooms",roomsRoute)
app.use("/server/users",usersRoute)
// console.log(process.env.jwt)