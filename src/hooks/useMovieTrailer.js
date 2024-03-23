import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

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

    dispatch(addTrailerVideo(filteredData));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;