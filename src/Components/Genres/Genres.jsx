import React, { useState, useEffect } from "react";
import "./Genres.css";

export default function Genres(props) {
  const [genreid, setGenreId] = useState("");
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`;

  const fetchGenre = () => {
    fetch(url + genreid)
      .then((response) => response.json())
      .then((data) => {
        props.handleMovies(data.results);
      });
  };

  useEffect(() => {
    fetchGenre();
  }, [genreid]);

  return (
    <div>
      <select
        className="darkbg"
        onChange={(e) => {
          setGenreId(e.target.value);
        }}
      >
        {props.genre.map((item) => {
          return (
            <option key={item.id} value={item.id} className="options">
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
