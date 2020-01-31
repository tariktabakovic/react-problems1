import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Grocerylist from './Grocerylist';
import Mylist from './Mylist';
import Favoritemovies from './Favoritemovies';
import MovieList from './listofmovies';

function App() {
  return (
    <div>
      {/* <Mylist list= 'Eggs, cereal, milk'/> */}
      <h1>
      <MovieList/>
      {/* <Favoritemovies movieslist= 'Goodfellas and Shutter Island'/> */}
      </h1>
    </div>
  );
}

export default App;
