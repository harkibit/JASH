import React, { useState } from 'react'
import "./Main_2.css"
import { Image, Reveal, Header, Rating, Label, List, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import 'animate.min.css';
import { Form, Grid, Transition } from 'semantic-ui-react'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {Link} from 'react-router-dom'
function MovieItem({movie}) {
    let imageBaseUrl = "https://image.tmdb.org/t/p/w200";
    const readmore_btn_style = {
        outline: "#8ad4ff",
        color : "#8ad4ff",
        borderColor : "#8ad4ff",
        fontSize: 19 +"px",
        height: 40 + "px",
    }
    const label_style = {
        backgroundColor : "#6babcf"
    }
    const animation = {
        animation : 'pulse', 
        duration: 500, 
        visible: true
    }
    // const pulse_anim = useState()
    
    const decoratedOnClick = useAccordionToggle();
    return (
        <>
        
        <Transition animation={animation} >
            <div className = " child-flex-item">
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <Image src={imageBaseUrl + movie.poster_path } height = '350px' width = '300px' />
                    </Reveal.Content>
                
                    <Reveal.Content hidden>
                        <div size='100px' className = "card-back">
                            <List.Item>
                                <Label style = {label_style} horizontal>
                                    <span className = "label-back-card">Title : </span>
                                </Label> <br/><br/>
                                {movie.title}
                            </List.Item>
                            <List.Item>
                                <Label style = {label_style} horizontal >                                
                                    <span className = "label-back-card">Rating : </span>
                                </Label><br/><br/>
                                <Rating defaultRating={parseFloat((movie.vote_average*5) / 10)} 
                                        maxRating={5} icon='star' 
                                        className = "rating" disabled 
                                />
                            </List.Item>
                            
                            <List.Item>
                                <Label style = {label_style} horizontal>                                
                                    <span className = "label-back-card">Release Date : </span>
                                </Label><br/><br/>
                                {movie.release_date}
                            </List.Item>
                    <Link to={`/moviePage/${movie.id}`}>
                            <button type="button" className="btn btn-outline " style = {readmore_btn_style} onClick={decoratedOnClick}> Read More </button>
                    </Link>         
                        </div>
                    </Reveal.Content>
                </Reveal>
            </div>
        </Transition>
    </>
    )
}
export default MovieItem