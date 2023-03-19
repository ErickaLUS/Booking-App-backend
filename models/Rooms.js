import mongoose from "mongoose";
const { Schema } = mongoose;
const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: number,
      required: true,
    },
    maxPeople: {
      type: number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
   roomNumbers: [{
       
   }]
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
