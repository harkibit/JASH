// import React, { useState , useEffect } from 'react';
import "./Navbar.css";
// import { Dropdown } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import React, {useState, useEffect} from 'react'

function Genres_1(props){
  const [genreid, setGenreId] = useState('')

  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${atob(
    'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
    )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
  
  // const Fetcher = async ()=>{const data = await (await fetch (url+genreid)).json();
  const Fetching= ()=>{
    fetch(url+genreid)
    .then(response => response.json())
    .then(data => {
        props.handleMovies(data.results);
        console.log(data)
    });
  }
  useEffect( ()=>{
    Fetching()        
  } , [genreid])

  
  const darkbg = {
    backgroundColor : "black",
    color : "white",
  }
 
  return (
    <div className="dropdown-menu m-o-drop" style = { darkbg } id="dropdown" aria-labelledby="navbarDropdown" 
      onChange={(e)=>setGenreId(e.target.value)} >
        {
          props.genre.length !== 0 && props.genre.map(item => { 
            setGenreId(item.target.value)           
            return (
              <a className="dropdown-item" href="#">
                {item.name}
              </a>
            );
          })
        }
    </div>
)}



export default function Genres(props) {

  const [genreid, setGenreId] = useState('')
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${atob(
    'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
  )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`;

  
  // const Fetcher = async ()=>{const data = await (await fetch (url+genreid)).json();
   const Fetching= ()=>{  
      fetch(url+genreid)
        .then(response => response.json())
        .then(data => {
          props.handleMovies(data.results);
        });
  }

    useEffect( ()=>{ 
      Fetching()
    } , [genreid])

    const darkbg = {
      backgroundColor : "black",
      color : "white",
      width : 150 + "px",
      outline : "none",
      border : "none",
      marginLeft : 10 + "px",
      height : 41 + "px",
    }
    const options_style = {
      fontSize : 20 + "px",
      border : "none"

    }
      return (
        <div>         
            <select style = { darkbg } onChange={(e)=>{
                setGenreId(e.target.value);           
              }}  >
              {props.genre.map(item => { 
              return (
                <option key={item.id} value={item.id} style = {options_style}>
                  {item.name}
                </option>
              );
              })}
            Genres
            </select>
        </div>
    )

}