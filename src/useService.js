import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFiODM5NDFjMDk0NmM3Yzc0YzJhOWU2ZTVjZmJiYSIsIm5iZiI6MTc0MjMxMDA1OC44MzM5OTk5LCJzdWIiOiI2N2Q5OGFhYWM1MzM5ZWFiYzYzNjY5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7XRpoej2Eok2cssS_uCvPk0qqoRymmcuBxZjhaEJrpM",
  },
};

export const fetchUsers = async () => {
    const resp = await axios
        .get(url, options);
    return resp
      
        
}
