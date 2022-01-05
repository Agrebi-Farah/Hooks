
import React from 'react' ;
import MovieCard from '../Movies/cards' ;
import './movies.css';

function MovieList({Film, search}) {
    return (
        <div className="movie-list">
            
            {Film.filter (el => el.name.toUpperCase().includes(search.toUpperCase().trim())).map ((el , key) => 
            <MovieCard key = {el.id } Aflem = {el} />  
            
            
            
            )  } 
        </div>
    )
}

export default MovieList