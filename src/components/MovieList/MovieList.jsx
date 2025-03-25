
import { Link } from 'react-router-dom';


const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(
          (movie) => (
            console.log(movie),
            (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <li>{movie.title}</li>
              </Link>
            )
          )
        )}
      </ul>
    </div>
  );
}

export default MovieList