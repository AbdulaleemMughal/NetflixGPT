import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  //Fetch data from tmdb app
  const dispatch = useDispatch();
  const topRated = useSelector(store => store.movies.nowTopRatedMovies);

  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log(json.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    // !topRated && getTopRatedMovie();
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
