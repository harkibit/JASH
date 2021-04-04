import React, { useEffect, useState } from "react";
import SearchBar from "../Search/Search.jsx";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Genres from "../Genres/Genres.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import logo from "../../assets/JASH.png";

export default function Navbar(props) {
  const [genresNamesArray, setGenresNamesArray] = useState([]);

  useEffect(() => {
    const TMDB_BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
    fetch(TMDB_BASE_URL)
      .then((resp) => resp.json())
      .then((data) => {
        setGenresNamesArray(data.genres);
      });
  }, []);

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="JASH logo" className="logo" />
          </Link>
          <Link to="/" className="navbar-brand">
              <h3>JASH</h3>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/about">
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    <h3>About</h3>
                  </Link>
                </li>
              </Link>

              <li className="nav-item dropdown">
                <Genres
                  genre={genresNamesArray}
                  handleMovies={props.handleMovies}
                />
              </li>
            </ul>

            <SearchBar
              genre={genresNamesArray}
              query={props.query}
              handleQuery={props.handleQuery}
              handleMovies={props.handleMovies}
            />
          </div>
          <hr />
        </div>
      </nav>
    </div>
  );
}
