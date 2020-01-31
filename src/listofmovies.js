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
                    this.state.movies.map((movie, index => (
                        <li onClick={()=>{
                            this._handleClick(index)
                        }}>{movie}</li>
                    )))
                    }
            </ul>
        )
    };

    _handleClick=(index) => {
        const newMovies = [
            ...this.state.movies
        ];
        newMovies[index] += '!';

        this.setState({
            movies: newMovies
        });
    }
}

export default MovieList; 