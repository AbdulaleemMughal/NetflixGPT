import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  //Fetch data from tmdb app
  const dispatch = useDispatch();
  // const upComingMovies = useSelector(store => store.movies.nowUpComingMovies);

  const getUpComingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log(json.results);

    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    // !upComingMovies && getUpComingMovie();
    getUpComingMovie();
  }, []);
};

export default useUpComingMovies;
