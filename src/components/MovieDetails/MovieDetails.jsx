import css from './MovieDetails.module.css'

const MovieDetails = ({ movie }) => {
    console.log(movie)
  return (
    <div className={css.blok}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width="300px"
          alt={movie.title}
        />
        <ul>
          <li>
            <h1>{movie.original_title}</h1>
          </li>
          <li>
            <p>User Score: {movie.vote_average}%</p>
          </li>
          <li>
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
          </li>
          <li>
                      <h2>Genres</h2>
                     
            <p>{movie.genres.map((g) => g.name).join(" • ")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails