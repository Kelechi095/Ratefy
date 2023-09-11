import "./home.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import Stars from "../../components/stars/Stars";
import { useSelector } from "react-redux";

const Home = () => {
  const {averageRating, userRating} = useSelector(state => state.rating)
  
  const rating = Math.trunc(averageRating)

  console.log(rating)

  return (
    <div className="home">
      <div className="rate-card">
        <h4>Average Rating</h4>
        {averageRating === 0 ? <h5 className="no-rating">No rating yet!</h5> : <h2>{averageRating} {averageRating === 1 ? "Star" : "Stars"}!!</h2>}
        <Stars averageRating={rating}/>
      </div>
      <Link to="/rate" className="rate-link">Click here to rate</Link>
    </div>
  );
};

export default Home;
