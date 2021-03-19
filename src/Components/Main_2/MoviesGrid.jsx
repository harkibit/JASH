import React from 'react'
import MovieItem from './MovieItem.js'
import 'semantic-ui-css/semantic.min.css'
import "./Main_2.css"

function MoviesGrid(props) {
    
    return (
        <>           
            <div className = " parent-flex ">
                {props.movies && props.movies.map((movie, index) => (
                    <MovieItem
                    key={`${index}`}
                    movie={movie}
                    
                    // rating ={movie.vote_average}
                    />
                ))}           
            </div>
        </>
    )
}

export default MoviesGrid
