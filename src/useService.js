import axios from "axios";
axios.defaults.baseURL='https://api.themoviedb.org/3'

 
const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFiODM5NDFjMDk0NmM3Yzc0YzJhOWU2ZTVjZmJiYSIsIm5iZiI6MTc0MjMxMDA1OC44MzM5OTk5LCJzdWIiOiI2N2Q5OGFhYWM1MzM5ZWFiYzYzNjY5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7XRpoej2Eok2cssS_uCvPk0qqoRymmcuBxZjhaEJrpM",
  },
};

export const fetchTrendingMovies = async () => {
    const {data} = await axios.get("/trending/movie/day", options);
    return data
      
        
}

export const fetchSearchMovies = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data
}

export const fetchMoviesDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options);
  return data;
};