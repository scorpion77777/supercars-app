const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    title: "SciFi",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movies",
    url: `/discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
};
