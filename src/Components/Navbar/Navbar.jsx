import React,{useEffect, useState} from 'react';
import SearchBar from "./SearchBar.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Genres from "./Genres.js";
import Register from './Registration.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Search from "./Search.js"
import logo from "../../assets/JASH.png"

export default function Navbar(props) {    

  const [genresNamesArray, setGenresNamesArray] = useState([])

  useEffect(()=>{
    const TMDB_BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
      'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
    )}`;
    fetch(TMDB_BASE_URL)
    .then(resp => resp.json())
    .then(data => {
      console.log(data) 
      setGenresNamesArray(data.genres)}
    );
    },[]
  )

  const sign_btn_style ={
    outline: "#8ad4ff",
    color : "#8ad4ff",
    borderColor : "#8ad4ff",
    fontSize: 20 +"px",
    height: 45 + "px",
    width : 150 + "px"
  }
  return (
    <div className="Navbar" >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="JASH logo" className="logo" />
          </Link>
          <Link to="/">            
            <a  href="#" className="navbar-brand"> 
              <h3>JASH</h3>
            </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    
                    <h4>About Us</h4>
                  </a>
                </li>
              </Link>

              <li className="nav-item dropdown">

              < Genres genre = { genresNamesArray } handleMovies = { props.handleMovies } /> 
              </li>
            </ul>

            <SearchBar  genre = { genresNamesArray } query={props.query} handleQuery={props.handleQuery} handleMovies={props.handleMovies} />
            
            <Link to="/register">
              <form className="d-flex">
                <button type="button" className="btn btn-outline " style = {sign_btn_style}>Sign In / Up </button>
              </form>              
            </Link>
            
          </div>
          <hr />
        </div>
      </nav>
    </div>
  );
}
