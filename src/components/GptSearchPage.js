import { BACKGROUND_URL } from "../utils/contants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BACKGROUND_URL} alt="Background Image"/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearchPage;
