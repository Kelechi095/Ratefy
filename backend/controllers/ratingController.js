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

const getAverageRating = async (req, res) => {
  try {
    const userRating = await Rating.find();
    const allRating = userRating.map((rate) => rate.rate);
    if (allRating.length > 0) {
      const totalRating = allRating.reduce((a, b) => a + b, 0);
      const averageRating = totalRating / allRating.length;

      const finalUserRating =
        averageRating === 1 ||
        averageRating === 2 ||
        averageRating === 3 ||
        averageRating === 4 ||
        averageRating === 5
          ? averageRating
          : averageRating.toFixed(1);

      res.status(200).json(finalUserRating);
    }
  } catch (err) {}
};

module.exports = {
  createRating,
  getRating,
  getAverageRating
};
