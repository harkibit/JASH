const TMDB_BASE_URL = `https://api.themoviedb.org/3`;

/*
for movies :: path = "search/movie" 
for genre :: path =  "genre/movie/list"
for trending :: path = "trending/movie/day"
https://api.themoviedb.org/3/discover/movie?apikey...&page=1&with_genres=14
*/
export const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};

export const genresUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&page=1&with_genres=${query}`;
};

export default { constructUrl, genresUrl };