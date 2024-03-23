import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="p-2 py-2">
      <h1 className="text-2xl py-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
