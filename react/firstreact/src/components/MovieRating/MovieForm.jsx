import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const options = [1, 2, 3, 4, 5];
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(0);

  const handleMovie = () => {
    if (movieName && rating > 0) {
      addMovie({ name: movieName, rating: parseInt(rating) });
      setMovieName("");
      setRating(0);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="0">Select Rating</option>
        {options.map((num) => (
          <option key={num} value={num}>
            {num} Star
          </option>
        ))}
      </select>
      <button onClick={handleMovie}>Add Movies</button>
    </div>
  );
};

export default MovieForm;
