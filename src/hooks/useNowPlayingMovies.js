import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  //Fetch data from tmdb app
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
  // console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // !nowPlayingMovie && getNowPlayingMovie();
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
