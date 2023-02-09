import express from 'express';
import dotenve from "dotenv";
import mongoose from "mongoose";
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



 app.listen(8800, ()=>{
     connect()
     console.log('Connected to backend!');
 })