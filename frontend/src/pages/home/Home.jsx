import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../../components/stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { getAverageRating, getRating } from "../../../redux/ratingSlice";
import { Ring, Waveform, DotSpinner, DotPulse } from "@uiball/loaders";

const Home = () => {
  const { averageRating, userRating, averageRatingLoading } = useSelector(
    (state) => state.rating
  );
  const [showReviewCard, setShowReviewCard] = useState(false);

  const dispatch = useDispatch();

  const rating = Math.trunc(averageRating);

  console.log(averageRatingLoading);

  useEffect(() => {
    dispatch(getAverageRating());
    dispatch(getRating())
  }, [dispatch]);

  return (
    <div className="home">
      <div className="rate-card">
        {averageRatingLoading ? <Waveform /> : <h4>{averageRating}</h4>}
        <Stars averageRating={rating} />
      </div>
      <Link to="/rate" className="rate-link">
        Click here to rate
      </Link>
      {userRating.length > 0 && (
        <button
          className={showReviewCard ? "hide-reviews" : "show-reviews"}
          onClick={() => setShowReviewCard(!showReviewCard)}
        >
          {showReviewCard ? "hide reviews" : "show reviews"}
        </button>
      )}
      {showReviewCard ? <ReviewCard /> : null}
    </div>
  );
};

export default Home;
