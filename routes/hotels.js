import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/Hotels.js";
import Hotels from "../models/Hotels.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//Create

router.post("/",verifyAdmin,createHotel);

//Udapte
router.put("/:id", verifyAdmin,updateHotel);
//Delete
router.delete("/:id", verifyAdmin,deleteHotel);
//Get
router.get("/find/:id", getHotel);
//GET All 
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType",countByType);
export default router;
