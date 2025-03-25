import { useEffect, useState } from "react"
import {fetchMoviesDetails} from '../useService'
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";


const MovieDetailsPage = () => {
    const {movieId}=useParams()
    const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);

      setError(null);
      try {
          const data = await fetchMoviesDetails(movieId);
          console.log(data)
         
        setMovies(data);

      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDetails();
},[movieId])

    console.log(movies)
   
  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p> Error!</p>}
          { <MovieDetails movie={movies} />}
    </div>
  );

}


 


export default MovieDetailsPage


