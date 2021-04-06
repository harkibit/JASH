import React from "react";
import "./MovieItem.css";
import { Image, Reveal, Rating, Label, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function MovieItem({ movie }) {
  let imageBaseUrl = "https://image.tmdb.org/t/p/w200";
  const label_style = {
    backgroundColor: "#6babcf",
  };
  const animation = {
    animation: "pulse",
    duration: 500,
    visible: true,
  };

  return (
    <>
      <Transition animation={animation}>
        <div className="child-flex-item">
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image
                src={imageBaseUrl + movie.poster_path}
                height="350px"
                width="300px"
              />
            </Reveal.Content>

            <Reveal.Content hidden>
              <div size="100px" className="card-back">
                <List.Item>
                  <Label style={label_style} horizontal>
                    <span className="label-back-card">Title : </span>
                  </Label>{" "}
                  <br />
                  <br />
                  {movie.title}
                </List.Item>
                <List.Item>
                  <Label style={label_style} horizontal>
                    <span className="label-back-card">Rating : </span>
                  </Label>
                  <br />
                  <br />
                  <Rating
                    defaultRating={parseFloat((movie.vote_average * 5) / 10)}
                    maxRating={5}
                    icon="star"
                    className="rating"
                    disabled
                  />
                </List.Item>

                <List.Item>
                  <Label style={label_style} horizontal>
                    <span className="label-back-card">Release Date : </span>
                  </Label>
                  <br />
                  <br />
                  {movie.release_date}
                </List.Item>
                <Link to={`/moviePage/${movie.id}`}>
                  <Button text = "See more"/>
                </Link>
              </div>
            </Reveal.Content>
          </Reveal>
        </div>
      </Transition>
    </>
  );
}
export default MovieItem;
