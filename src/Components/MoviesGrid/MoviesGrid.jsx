import React from "react";
import MovieItem from "../MovieItem/MovieItem.jsx";
import "./MoviesGrid.css";

function MoviesGrid(props) {
  return (
    <>
      <div className="parent-flex">
        {props.movies &&
          props.movies.map((movie, index) => (
            <MovieItem
              key={`${index}`}
              movie={movie}
              // rating ={movie.vote_average}
            />
          ))}
      </div>
    </>
  );
}

export default MoviesGrid;
