import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/Hotels.js";
import Hotels from "../models/Hotels.js";


const router = express.Router();

//Create

router.post("/",createHotel);

//Udapte
router.put("/:id", updateHotel);
//Delete
router.delete("/:id",deleteHotel);
//Get
router.get("/:id", getHotel);
//GET All 
router.get("/", getHotels);
export default router;
