import { useEffect, useState } from "react";
import "./App.scss";
const apiKey = import.meta.env.VITE_API_KEY;
import MovieCards from "./Components/MovieCards";
import SearchBar from "./Components/SearchBar";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setMovies(obj.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);// L'array vuoto [] indica che useEffect si esegue solo al mount del componente

  const handleSearch = (search) => {
    const filteredMovies = movies.filter((m) => // filtro stato movies
      m.title.toLowerCase().includes(search.toLowerCase().trim())
    );

    setMovies(filteredMovies);//aggiornamento dello stato
  };

  return (
    <>
      <h1>popular movies and most rated</h1>
      {movies.map((movie, i) => (//iterazione sullo stato movies
        <MovieCards
          key={i}
          title={movie.title}
          overview={movie.overview}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
          //movie.title valori che fanno parte dell'oggetto api
        />
      ))}
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;

/*  list={movies} */

{
  /*  <div>
        {movies.map((movie, index) => (
          <div key={index} >
          <p >{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <figure>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt="" />
          </figure>
     
          </div>
        ))}
        </div>  */
}

/* let objList = obj.results.map((m) => {
  return {
    title: m.title,
    overview: m.overview,
    vote_average: m.vote_average,
    poster_path: m.poster_path,
  };
}); */
