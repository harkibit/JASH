import React, { useState, useEffect } from "react";

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
      .then((response) => response.json())
      .then((data) =>{ setActors(data?.cast)
    console.log(data)},[]);
      console.log(actors)
  },[]);
  return (
  <div></div>
  );
}