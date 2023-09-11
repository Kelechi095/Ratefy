import { useEffect, useState } from 'react';
import { AiFillStar } from "react-icons/ai";

const Stars2 = ({rate, setRate}) => {
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

  const handleSetRate = () => {
    setStars(stars.map(star => {
      if(rate === 0) {
        return star
      }
      if(rate === 1) {
        if(star.id === 1) {
          return {...star, clicked: true}
        }
        return {...star, clicked: false}
      }
      if(rate === 2) {
        if(star.id === 1 || star.id === 2) {
          return {...star, clicked: true}
        }
        return {...star, clicked: false}
        
      }
      if(rate === 3) {
        if(star.id === 1 || star.id === 2 || star.id === 3) {
          return {...star, clicked: true}
        }
        return {...star, clicked: false}
        
      }
      if(rate === 4) {
        if(star.id === 1 || star.id === 2 || star.id === 3 || star.id === 4) {
          return {...star, clicked: true}
        }
        return {...star, clicked: false}
      
      }
      if(rate === 5) {
        return {...star, clicked: true}
      }
      
    }))
  }

  useEffect(() => {
    handleSetRate()
  }, [rate])

  
  return (
    <div className="stars">
      {stars.map((star) => (
        <div className={star?.clicked ? "gold-star-2" : "grey-star-2"} key={star?.id} onClick={() => setRate(star?.id)}>
          {star?.title}
        </div>
      ))}
    </div>
  );
};

export default Stars2;
