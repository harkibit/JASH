// import React ,{ useState } from 'react'
import { Icon, Grid, Input, Popup } from 'semantic-ui-react';
import "./Navbar.css";
import 'semantic-ui-css/semantic.min.css';

// function Spinner({ isLoading }) {
//   const [loading, setLoading] = useState(false);
//   const handleLoading = () => {
//     setLoading();
//   };
//   return (
//     <div
//       className="spinner-grow spinner"
//       role="status"
//       onChange={handleLoading}
//     ></div>
//   );
// }

// // export default function SearchBar() {
// //   

// //   return (
// //     <div className="searchBox-parent-div">
// //       <div className="searchBar-child-div hide">
// //         <form>
// //           <div className="search-container">
// //             <div className="input-icons">
// //               <i className="fas fa-search icon" type="submit"></i>
// //               <input
// //                 type="text"
// //                 className="input-field"
// //                 id="search-bar"
// //                 placeholder="  search.."
// //                 onChange={handleInputText}
// //               />
// //             </div>
// //             {inputText.length !== 0 && <Spinner />}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// const SearchBar = () => {
//   const [inputText, setInputText] = useState(" ");

//   const handleInputText = (e) => {
//     setInputText(e.target.value);
//   };

//   const style = {
//     borderRadius: 0,
//     opacity: 0.7,
//     padding: '2em',
//   }
//   return (
//     <Grid.Column>
//       <Popup
//         trigger={<Input icon={<Icon name='search' link className="fa-search"/>} id ="search-bar" 
//         placeholder='  Search...' inverted/> }
//         content='search by genre, header, year and actors'
//         style={style} 
//       />
//     </Grid.Column>
//   )
// }


import React,{useState} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function Spinn() {
  const spin_style = {
    color: "#8ad4ff",
    // width: 25 + "px",
    // height: 23 + "px",
    marginTop: 8 + "px" ,
  }
  return (
      <Spinner animation="border" role="status" variant="primary" style = {spin_style}></Spinner>
  )
}

function SearchBar(props) {
  
    const [inputText, setInputText] = useState('')
    const [spn, setSpn] = useState(false)

    const handleChange=(event)=>{
      setInputText(event.target.value)
      }


    const show=(event)=>{
      setSpn(true);
      setInputText(event.target.value)
      props.handleQuery(event.target.value)
        if(event.target.value===""){
        return setSpn(false)
        }
    }


    const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
    const constructUrl = (path, query) => {
      return `${TMDB_BASE_URL}/${path}?api_key=${atob(
        'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
      )}&query=${query}`;
    };
    
    const style = {
          borderRadius: 0,
          opacity: 0.7,
          padding: '2em',
        }

    const onSubmit = (event)=>{event.preventDefault();
      fetch(constructUrl("search/movie", props.query ))
        .then(response => response.json())
        .then(data => { 
          console.log(data)
          props.handleMovies(data.results);
          setSpn(false)
        });
    }

  return (
    <div className="searchBox-parent-div">
      <div className="searchBar-child-div hide d-flex ">
        <form onSubmit={onSubmit} autocomplete = "off"> 
            <Popup
              trigger={<Input  icon={<Icon type = "submit " name='search' link className="fa-search" />} id ="search-bar" 
              placeholder='  Search...' onChange={show}  inverted /> }
              content=" Search by movie's name "
              style={style}
            />
            {spn && (<Spinn />)}
        </form>
      </div>
    </div>
  );
}

export default SearchBar