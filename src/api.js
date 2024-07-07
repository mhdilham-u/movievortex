const baseurl = import.meta.env.VITE_API_BASE_URL;
const apikey = import.meta.env.VITE_API_KEY;

export const getMovieDataList = async () => {
  const movie = await fetch(`${baseurl}/movie/popular?api_key=${apikey}`);
  const response = await movie.json();
  const data = await response;
  return data.results;
};

export const getMovieUpcomingDataList = async () => {
  const movie = await fetch(`${baseurl}/movie/upcoming?api_key=${apikey}`);
  const response = await movie.json();
  const data = await response;
  return data.results;
};

export const getMovieNowPlaying = async () => {
  const movie = await fetch(`${baseurl}/movie/now_playing?api_key=${apikey}`);
  const response = await movie.json();
  const data = await response;
  return data.results;
};

export const searchMovie = async (query) => {
  const movie = await fetch(
    `${baseurl}/search/movie?query=${query}&api_key=${apikey}`
  );
  const response = await movie.json();
  const data = await response;
  return data;
};
// export const getMovieDataList = () => {
//   fetch(`${baseurl}/popular?api_key=${apikey}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
