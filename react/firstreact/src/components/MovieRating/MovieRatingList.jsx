import React, { useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import AverageRating from "./AverageRating";

const MovieRatingList = () => {
  const [movies, setMovies] = useState([]);
  //add the new movies
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  //delete the movie
  const handleDeleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };
  //calculate average rating
  const calculateAvgRating = () => {
    if (movies.length === 0) return 0;
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
    return (totalRating / movies.length).toFixed(1);
  };

  return (
    <>
      <h1>Movie Rating App</h1>
      {/* // let's us to add new movie */}
      <MovieForm addMovie={addMovie} />
      {/* //show list of movies with their ratings */}
      <MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} />
      {/* //avg.ratings */}
      <AverageRating calculateAvgRating={calculateAvgRating()} />
    </>
  );
};

export default MovieRatingList;
