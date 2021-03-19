import React, { useState, useEffect } from "react";

export default function Trailers({ movieID }) {
  const [trailer, setTrailer] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/videos`))
      .then((response) => response.json())
      .then((data) => setTrailer(data.results[0]));
  },[]);
  
  return (
    <div>
      <iframe
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}