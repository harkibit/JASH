import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [poster, setPoster] = useState([]);
  const trending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&language=en-US`;
  let imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(trending)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPoster(data.results[1]);
      });
  }, []);
  //
  const header = {
    backgroundImage: `url(` + imageBaseUrl + poster.backdrop_path + `)`,
    width: "100vw",
    height: "90vh",
  };
  console.log(trending);
  return (
    <div style={header} className="header">
        <h1>{}</h1>
    </div>
  );
}
