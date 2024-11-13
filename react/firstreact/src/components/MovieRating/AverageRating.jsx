import React from "react";

const AverageRating = ({ calculateAvgRating }) => {
  // const averageRating = 3.6;
  return (
    <div>
      <h3>Average Rating: {calculateAvgRating}</h3>
    </div>
  );
};

export default AverageRating;
