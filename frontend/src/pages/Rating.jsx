import React, { useState } from "react";
import Stars2 from "../components/stars2/Stars2";
import { useDispatch, useSelector } from "react-redux";
import {createRating, getAverageRating, getRating, submitRating } from "../../redux/ratingSlice";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../redux/ratingSlice";

const Rating = () => {
  const [rate, setRate] = useState(0);
  const [review, setReview, alert] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitRating = (e) => {
    const newRating = {
      rate,
      review,
    };

    if (newRating.review === "") {
    } else {
      dispatch(createRating(newRating));

      setRate(0);
      setReview("");
      navigate("/");
    }
  };


  return (
    <div className="rating">
      <div className="rate-card2">
        <Stars2 rate={rate} setRate={setRate} />
      </div>
      <textarea
        placeholder="Your opinion..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <p>{alert}</p>
      <button className="submit-rating" onClick={handleSubmitRating}>
        Sumbit Your Rating
      </button>
    </div>
  );
};

export default Rating;
