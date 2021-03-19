import React from "react";
import MoviesGrid from "../../Components/MoviesGrid/MoviesGrid";
import "./Home.css";

export default function Main_2(props) {
  return (
    <div className=" main ">
      <MoviesGrid movies={props.movies} movieGenre={props.movieGenre} />
    </div>
  );
}
