import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovie = () => {
  //Fetch data from tmdb app
  const dispatch = useDispatch();

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
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
