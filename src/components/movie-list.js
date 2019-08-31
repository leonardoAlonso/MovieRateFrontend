import React from 'react';

function MovieList(props) {

    return (
        <React.Fragment>
            { props.movies.map(movie => {
                return <h2 key={movie.id}>{movie.title}</h2>
            }) }
        </React.Fragment>
    ) 
}

export default MovieList;