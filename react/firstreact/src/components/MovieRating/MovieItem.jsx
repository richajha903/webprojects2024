import React from "react";

const MovieItem = ({ movie, deleteButton }) => {
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "green" : "darkgrey" }}>
        &#9733;
      </span>
    ));
  };
  return (
    <>
      <li>
        {movie.name} - {renderStars(movie.rating)}
        <button onClick={deleteButton} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </li>
    </>
  );
};

export default MovieItem;
