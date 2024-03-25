import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearchPage from "./GptSearchPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { toggleGptSearchVeiw } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/contants";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpComingMovies();
  const dispatch = useDispatch();
  const GptSearchVeiw = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = () => {
    //Toggle GPT Search Button
    dispatch(toggleGptSearchVeiw());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-52 m-5"
        />
        <div>
          <select
            className="bg-gray-700 text-white p-2 m-2"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="text-white py-3 px-5 mx-9 my-5 rounded-lg bg-red-600 mb-5"
            onClick={handleGptSearchClick}
          >
            {GptSearchVeiw ? lang[langKey].home : lang[langKey].gptSearch}
          </button>
        </div>
      </div>

      {GptSearchVeiw ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
