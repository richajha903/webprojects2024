import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, handleDeleteMovie }) => {
  // const movies = [
  //   { name: "Dabang", rating: 2 },
  //   { name: "Pushpa", rating: 5 },
  //   { name: "Animal", rating: 4 },
  // ];
  return (
    <div>
      <h2>Movie Lists:</h2>
      <ul>
        {movies.map((movie, index) => (
          <MovieItem
            key={index}
            movie={movie}
            deleteButton={() => handleDeleteMovie(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
