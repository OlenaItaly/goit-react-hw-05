import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../useService";
import MovieList from "../components/MovieList/MovieList";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);

      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies();
},[])

console.log(movies)
  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p> Error!</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
    </div>
  );

}

export default HomePage