import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovie = useSelector(store => store.movies.trailerVideos);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filteredData = json.results.filter(
      (video) => video.type == "Trailer"
    );
    // const trailer = filteredData.length ? filteredData : json.results[0];
    // console.log(filteredData);

    dispatch(addTrailerVideos(filteredData));
  };

  useEffect(() => {
    // !trailerMovie && getMovieVideos();
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;