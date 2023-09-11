import "./home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../../components/stars/Stars";
import { useSelector } from "react-redux";
import ReviewCard from "../../components/reviewCard/ReviewCard";

const Home = () => {
  const { averageRating, userRating, alert } = useSelector(
    (state) => state.rating
  );
  const [showReviewCard, setShowReviewCard] = useState(false);

  const rating = Math.trunc(averageRating);

  return (
    <div className="home">
      <div className="rate-card">
        <h4>{averageRating}</h4>
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
