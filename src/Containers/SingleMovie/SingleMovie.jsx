import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Trailers from "../../Components/Trailers/Trailers";
import Actors from "../../Components/Actors/Actors";
import { Grid } from "semantic-ui-react";
// import "./Main_2.css";
import "./SingleMovie.css"

function SingleMovie() {
  const [thatMovie, setThatMovie] = useState();
  const { id } = useParams();
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
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
          <Grid className="moviePage">
            <Grid.Row className="margins">
              <Grid.Column width={4}>
                <Trailers movieID={id} />
              </Grid.Column>

              <Grid.Column width={4}>
                <div className="column2">
                  Release Date: {thatMovie?.release_date} <br />
                  <br />
                  {thatMovie?.overview} <br />
                  <br />
                  Rating: {thatMovie?.vote_average}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <Actors movieID={id} /> */}
        </div>
      )}
    </div>
  );
}
export default SingleMovie;
