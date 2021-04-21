import React from "react";
import MoviesGrid from "../../Components/MoviesGrid/MoviesGrid";
import Header from "../../Components/Header/Header";
import "./Home.css";

export default function Home(props) {
  return (
    <div className = "home-container">
      <Header />
      <div className=" main ">
        <MoviesGrid movies={props.movies} movieGenre={props.movieGenre} />
      </div>
    </div>
  );
}
