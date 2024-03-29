import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/Rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create

router.post("/:hotelid",verifyAdmin,createRoom);

//Udapte
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//Delete
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom);
//Get
router.get("/:id", getRoom);
//GET All 
router.get("/", getRooms);


export default router;
