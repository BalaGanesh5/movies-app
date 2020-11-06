import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
// import Movies from "./Movies";
import axios from "axios";

const Movies= React.lazy(() => import('./Movies'));

const Featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const Search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([""]);
  const [input, setInput] = useState("");
  const [header, setHeader]= useState('false')

  useEffect(() => {
   getMovies(Featured_api)
  }, []);

  const getMovies = (API) => {
    axios.get(API).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    getMovies(Search_api+input);
    setInput('');
  }


  const onScroll= () => {
     (window.scrollY) >=80 ?
       setHeader(true): 
       setHeader(false)
  }  

  window.addEventListener('scroll', onScroll);






  return (
    <div className="body">
      
        <header className= {header ? 'header active':'header' }>
        <form onSubmit= {submitHandler}>
          <input
           className='search'
            type="search"
            placeholder="search . . ."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          </form>
        </header>
      
      <Suspense  fallback={<div>Loading...</div>}>
      <div className="movie__container">
        {movies.length > 0 &&
          movies.map((movie) => <Movies key={movie.id} {...movie} />)}
      </div>
      </Suspense>
    </div>
  );
}

export default App;
