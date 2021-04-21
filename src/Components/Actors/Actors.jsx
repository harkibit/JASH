import React, { useState, useEffect } from "react";
import { Image, Reveal } from "semantic-ui-react";
import "./Actors.css";

export default function Actors({ movieID }) {
  const [actors, setActors] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const image = "https://image.tmdb.org/t/p/w200";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/credits`))
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.cast);
        setActors(data?.cast);
      }, []);
  }, []);
  return (
    <div className="actors">
      {actors &&
        actors.map((actor) => {
          return (
            <Reveal animated="small fade">
              <Reveal.Content visible>
                <span>{actor.name}</span>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src={image+actor.profile_path} size="small" />
              </Reveal.Content>
            </Reveal>
          );
        })}
    </div>
  );
}
