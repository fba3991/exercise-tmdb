const MovieCards = ({ title, overview, vote_average, poster_path }) => {//destracturing dell'oggetto fetch.
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{overview}</p>
        <p> Rate: {vote_average}</p>
        <figure>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path} `} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default MovieCards;

/* <div>
        {list.map((movie, index) => (
          <div key={index} >
          <p >{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <figure>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt="" />
          </figure>
     
          </div>
        ))}
      </div> */
