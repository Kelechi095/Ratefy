import "./home.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import Stars from "../../components/stars/Stars";
import { useSelector } from "react-redux";
import ReviewCard from "../../components/reviewCard/ReviewCard";

const Home = () => {
  const {averageRating, userRating, alert} = useSelector(state => state.rating)
  
  const rating = Math.trunc(averageRating)

  console.log(alert)

  return (
    <div className="home">
      <div className="rate-card">
        <h4>{averageRating}</h4>
        <Stars averageRating={rating}/>
      </div>
      <Link to="/rate" className="rate-link">Click here to rate</Link>

      <ReviewCard />
    </div>
  );
};

export default Home;
