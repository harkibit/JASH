// before sign in / up
import React from "react";
import "./Main_1.css";
import movies from "./movies.png";

export default function Main() {
  const api = `https://api.themoviedb.org/3/discover/movie?api_key=${atob(
    'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
    )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
  fetch(api).then(res => res.json()).then(data => console.log(data))
  return (
    <div className="main-1">
      <h3 className="title-main-1">Here's your way for Unlimited Movies !</h3>
      <div className="seacrh">
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
