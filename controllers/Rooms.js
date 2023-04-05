import Rooms from "../models/Rooms.js"
import Hotels from "../models/Hotels.js";
import { createError } from "../utils/Error.js"

export const createRoom= async(req,res,next)=>{
 const hotelId=req.params.hotelid

const newRoom= new Rooms(req.body)

try{
const savedRoom = await newRoom.save()
try{
await Hotels.findByIdAndUpdate(hotelId, {$push:{rooms:savedRoom._id}});
}catch(err){
    next(err);
}
res.status(200).json(savedRoom)
}catch(err){
    next(err)
}
}

export const updateRoom = async (req, res, next) => {
  try {
    const udapteRooms = await Rooms.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(udapteRooms);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {

   const hotelId = req.params.hotelid;
  try {
    await Rooms.findByIdAndDelete(req.params.id);
    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $pull: { rooms:req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Rooms.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Hotels.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
