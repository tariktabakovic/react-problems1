import React from 'react';
import Listofmovies from './listofmovies'

function Favoritemovies({movieslist}){
    const showfavmovies = `Here are my favorite movies: ${movieslist}`
    return (
        <div>
            <Listofmovies movieslist={showfavmovies}/>
        </div>
    )
}

export default Favoritemovies