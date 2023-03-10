import express from 'express';
import dotenve from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import req from "request";
import res from "response";
import cookieParser from 'cookie-parser';
 
const app = express();
dotenve.config()
const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB is disconnected");
})
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

//middlewares
app.use(cookieParser())
app.use(express.json())         
app.use('/api/auth', authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req, res, next) => {

  const errStatus=err.status || 500
  const errMessage = err.message || "something went wrong";

return res.status(errStatus).json({
  success: false,
  status: errStatus,
  message: errMessage,
  stack: err.stack,
});
});


 app.listen(8800, ()=>{
     connect()
     console.log('Connected to backend!');
 })