import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/Users.js" 

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";



const router = express.Router();

/* router.get("/checkauthentication",verifyToken, (req,res,next)=>{
res.send("hello user you are logged in")
}) 

router.get("/checkuser/:id",verifyUser, (req, res, next) => {
  res.send("hello user you are logged in and you can delete account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can all accounts");
}); */

//Udapte
router.put("/:id",verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser,deleteUser);
//Get
router.get("/:id",verifyUser, getUser);
//GET All
router.get("/", verifyAdmin,  getUsers);

export default router;
