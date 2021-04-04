import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Trailers from "../../Components/Trailers/Trailers";
import Actors from "../../Components/Actors/Actors";
import { Icon } from "semantic-ui-react";
import Keywords from "../../Components/Keywords/Keywords"
import "./SingleMovie.css";

function SingleMovie() {
  const [thatMovie, setThatMovie] = useState();
  const { id } = useParams();
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${id}`))
      .then((response) => response.json())
      .then((data) => {
        setThatMovie(data);
      });
  }, []);
  return (
    <div className="single-movie-page">
      {thatMovie && (
        <div className="moviePage">
          <div className="moviePage-child">
            <Trailers movieID={id} />
            <div className="column2">
              <div>
                <h1>{thatMovie?.title}</h1>
                <Keywords movieID = {id}/>
              </div>
              <span>{thatMovie?.overview}</span>
              <div class = "date-rate">
                <span>
                  <Icon name="calendar alternate" />
                  <b>Release Date:</b> {thatMovie?.release_date}
                </span>
                <span>
                  <Icon name="star" />
                  <b>Popularity:</b> {thatMovie?.vote_average}
                </span>
              </div>
            </div>
          </div>
          {/* <Actors movieID={id} /> */}
        </div>
      )}
    </div>
  );
}
export default SingleMovie;
