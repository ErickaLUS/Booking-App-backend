import Hotels from "../models/Hotels.js";
export const createHotel = async (req, res, next) => {
  const newHotels = new Hotels(req.body);
  try {
    const savedHotel = await newHotels.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const udapteHotels = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(udapteHotels);
  } catch (err) {
/*   res.status(500).json(err); */
 next(err)
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
   next(err)
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err)
  }
};
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
