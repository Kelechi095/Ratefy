import React from 'react'
import './reviewCard.css'
import { useSelector } from 'react-redux'

const ReviewCard = () => {
  const {userRating} = useSelector(state => state.rating)

  return (
    <div>
      {userRating.map((rating, index) => (
        <div className="user-rating-card" key={index}>
          <h4>{rating.rate} stars!</h4>
          <p>{rating.review}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard