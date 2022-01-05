import React from 'react' ;
import './App.css';
import Navbar from './Components/Navbar/navi' ;
import Filter from './Components/Filter/filter' ;
import Add from './Components/Add/add' ;
import MovieList from './Components/Movies/movielist' ;
import {Movies} from './Components/Movies/movies'
import Footer from './Components/Footer/footer' ;
import {useState} from 'react' ;

function App() {

  const [ Films , setFilms] = useState (Movies) ;
  const addHandler = (newFilm) => {
  setFilms (
    [...Films , newFilm]
  )

  }
// get the data from the user by typing
const [search,setSearch] = useState ("")


// get the data from the user by rating
const [rating,setRating] = useState ("")



  return (
    <div className="App">
      
      <Navbar />
      <br/>
      <Filter setSearch={setSearch} Rating ={rating} setRating={setRating} />
      <br/>
      <Add addHandler={addHandler} />
      <br/>
      <MovieList Film = {Films}
      search={search} />
      <br/>
      <Footer/>

      
    </div>
  );
}

export default App;