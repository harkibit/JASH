import React, { useState, useEffect } from "react";
import { Image, Reveal } from "semantic-ui-react";
import "./Actors.css";

export default function Actors({ movieID }) {
  const [actors, setActors] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/credits`))
      .then((res) => res.json())
      .then((data) => {
        setActors(data?.cast);
      }, []);
  }, []);
  return (
    <div className="actors">
      {actors &&
        actors.map((actor) => {
          console.log(actor.name)
          return (
            <Reveal animated="small fade">
              <Reveal.Content visible>
                <span>{actor.name}</span>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="/images/wireframe/square-image.png" size="small" />
              </Reveal.Content>
            </Reveal>
          );
        })}
    </div>
  );
}
