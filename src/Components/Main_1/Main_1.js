// before sign in / up
import React from "react";
import "./Main_1.css";
import movies from "./movies.png";

export default function Main() {
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
