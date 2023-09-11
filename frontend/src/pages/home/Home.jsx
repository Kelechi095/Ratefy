import "./home.css";
import { useState } from "react";
import Stars from "../../components/stars/Stars";

const Home = () => {
  const [averageRating, setAverageRating] = useState(3)
  

  return (
    <div className="home">
      <div className="rate-card">
        <h4>Average Rating</h4>
        {averageRating === 0 ? <h5 className="no-rating">No rating yet!</h5> : <h2>{averageRating} {averageRating === 1 ? "Star" : "Stars"}!!</h2>}
        <Stars averageRating={averageRating}/>
      </div>
    </div>
  );
};

export default Home;
