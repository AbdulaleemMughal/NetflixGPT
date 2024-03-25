import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/contants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Getting movie from GPT and fetch it from TMDB movie platform.

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = data.json();
    console.log(json.results);
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT and fetch movies result from it.

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me the name of five movies, comma seaprated like the example result given ahead. Example Result: Gadar, Sholay, Don, Chal mera putt, Golmall";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices?.[0].message?.content.split(","));

    // By using thr split method we closed the list of movies into the array, Then we can use the map method to get the fetched movie.
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    //It will give array of Five promises, because it contain five movies
    // [Promise, Promise, Promise, Promise, Promise]. It will take to much time. TO avoid this there is a function "Promise.all()" which helps us to overcome this type of problem. It will give all the promises at one time.

    const tmdbResults = Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-10"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 text-white col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
