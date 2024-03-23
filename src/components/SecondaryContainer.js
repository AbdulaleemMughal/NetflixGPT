import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-44 relative z-20">
          <MovieList title={"Now Playing:"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular:"} movies={movies.nowPopularMovie} />
          <MovieList title={"Top Rated:"} movies={movies.nowTopRatedMovies} />
          <MovieList
            title={"Upcoming Movies:"}
            movies={movies.nowUpComingMovie}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
