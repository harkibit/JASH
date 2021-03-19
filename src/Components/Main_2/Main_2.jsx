import React from 'react'
import MoviesGrid from './MoviesGrid'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

import "./Main_2.css"

export default function Main_2(props) {   
    const style = {
        textAlign : "left",
        fontSize : 30 + "px",
        color : "white",
    } 
    return (
        <div className = " main ">
            {/* <Header as='h3' className = "header-genre-name" style = {style} dividing>
                name
            </Header> */}
            <MoviesGrid movies={props.movies} movieGenre={props.movieGenre}/>
            {/* <hr/> */}
        </div>
    )
}