const Rating = require("../models/ratingModel");

const createRating = async (req, res) => {
  try {
    const { rate, review } = req.body;

    if (!rate || !review) {
      return res.status(400).json({ msg: "Value required" });
    }

    const rating = await Rating.create({ rate, review });

    res.status(200).json(rating);
  } catch (err) {
    res.status(200).json({ msg: err.message });
  }
};

const getRating = async (req, res) => {
  try {
    const rating = await Rating.find();
    res.status(200).json(rating);
  } catch (err) {
    res.status(200).json({ msg: err.message });
  }
};

module.exports = {
  createRating,
  getRating,
};
