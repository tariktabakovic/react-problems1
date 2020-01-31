import React from 'react';


function _handleMouseOver(){
    console.log('touch')
}

// const movies = [
//     'Goodfellas',
//     'Shutter Island'
// ]

// MovieList is a react component
class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [
                'Goodfellas',
                'Shutter Island'
            ]
        };
    }
    render(){
        return (
            <ul>
            {
                this.state.movies.map(movie => <li onClick={this._handleClick}>{movie}</li>)
            }
            </ul>
        );
    }
    _handleClick = (event) => {
        console.log('They clicked!')
        console.log(event.target)
    }
}

export default MovieList; 