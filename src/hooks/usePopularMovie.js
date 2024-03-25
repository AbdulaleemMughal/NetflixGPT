import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovie = () => {
  //Fetch data from tmdb app
  const dispatch = useDispatch();
  const popularMovie = useSelector(store => store.movies.nowPopularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // !popularMovie && getPopularMovie();
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
