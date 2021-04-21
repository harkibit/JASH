import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Trailers from "../../Components/Trailers/Trailers";
import Actors from "../../Components/Actors/Actors";
import { Icon, Image } from "semantic-ui-react";
import Keywords from "../../Components/Keywords/Keywords"
import "./SingleMovie.css";
import Button from "../../Components/Button/Button";

function SingleMovie() {
  const [thatMovie, setThatMovie] = useState();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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

  let imageBaseUrl = "https://image.tmdb.org/t/p/w200";

  const style = {
    backgroundSize: "cover",
    backgroundImage : `url(${imageBaseUrl}+${thatMovie?.poster_path})`
  }
  return (
    <div className="single-movie-page" style = {style}>
      {thatMovie && (
        <div className="moviePage">
          <div className="moviePage-child">
            <Image src = {imageBaseUrl + thatMovie?.poster_path}/>
            <div className="column2">
              <div>
                <h1 className = "title">{thatMovie?.title}</h1>
                <Keywords movieID = {id}/>
              </div>
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
              <span className = "overview">{thatMovie?.overview}</span>
              <div className = "date-rate">
                <Button text = " Watch trailer" onClick = {handleOpen}/>
              </div>
            </div>
          </div>
          <Actors movieID={id} />
          <Trailers movieID={id} open = {open} setClose = {() => setOpen(false)}/>
        </div>
      )}
    </div>
  );
}
export default SingleMovie;
