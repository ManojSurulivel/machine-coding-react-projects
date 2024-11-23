import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={index}
            className={`star ${starNumber <= rating ? "selected" : ""}`}
            onClick={() => handleRating(starNumber)}
          >
            ★
          </span>
        );
      })}
      <p>Your rating: {rating} / {totalStars}</p>
    </div>
  );
};

const StarRatingComponent = () => {
  return (
    <div className="app">
      <h1>Star Rating Component</h1>
      <StarRating totalStars={5} />
    </div>
  );
};

export default StarRatingComponent;
