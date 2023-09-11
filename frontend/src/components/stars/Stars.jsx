import { useEffect, useState } from 'react';
import './stars.css'
import { AiFillStar } from "react-icons/ai";

const Stars = ({averageRating}) => {
  const [stars, setStars] = useState([
    {
      id: 1,
      title: <AiFillStar />,
      clicked: false,
    },
    {
      id: 2,
      title: <AiFillStar />,
      clicked: false,
    },
    {
      id: 3,
      title: <AiFillStar />,
      clicked: false,
    },
    {
      id: 4,
      title: <AiFillStar />,
      clicked: false,
    },
    {
      id: 5,
      title: <AiFillStar />,
      clicked: false,
    },
  ]);

  const setRate = () => {
    setStars(stars.map(star => {
      if(averageRating === 0) {
        return star
      }
      if(averageRating === 1) {
        if(star.id === 1) {
          return {...star, clicked: true}
        }
        return star
      }
      if(averageRating === 2) {
        if(star.id === 1 || star.id === 2) {
          return {...star, clicked: true}
        }
        return star
      }
      if(averageRating === 3) {
        if(star.id === 1 || star.id === 2 || star.id === 3) {
          return {...star, clicked: true}
        }
        return star
      }
      if(averageRating === 4) {
        if(star.id === 1 || star.id === 2 || star.id === 3 || star.id === 4) {
          return {...star, clicked: true}
        }
        return star
      }
      if(averageRating === 5) {
        return {...star, clicked: true}
      }
      
    }))
  }

  useEffect(() => {
    setRate()
  }, [averageRating])

  return (
    <div className="stars">
      {stars.map((star) => (
        <div className={star?.clicked ? "gold-star" : "grey-star"} key={star?.id}>
          {star?.title}
        </div>
      ))}
    </div>
  );
};

export default Stars;
