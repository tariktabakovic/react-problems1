import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Grocerylist from './Grocerylist';
import Mylist from './Mylist';
import Favoritemovies from './Favoritemovies';

function App() {
  return (
    <div>
      <Mylist list= 'Eggs, cereal, milk'/>
      <div>
      <Favoritemovies movieslist= 'Goodfellas and Shutter Island'/>
      </div>
    </div>
  );
}

export default App;
