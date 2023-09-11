import React, { useState } from "react";
import Stars2 from "../components/stars2/Stars2";
import { useDispatch, useSelector } from "react-redux";
import { calculateAverageRating, submitRating } from "../../redux/ratingSlice";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const [rate, setRate] = useState(0);
  const [opinion, setOpinion] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitRating = (e) => {
    const newRating = {
      rate,
      opinion,
    };
    dispatch(submitRating(newRating));
    dispatch(calculateAverageRating())

    setRate(0);
    setOpinion("");
    navigate("/");
  };

  return (
    <div className="rating">
      <div className="rate-card2">
        <Stars2 rate={rate} setRate={setRate} />
      </div>
      <textarea
        placeholder="Your opinion..."
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
        required
      />
      <button className="submit-rating" onClick={handleSubmitRating}>
        Sumbit Your Rating
      </button>
    </div>
  );
};

export default Rating;
