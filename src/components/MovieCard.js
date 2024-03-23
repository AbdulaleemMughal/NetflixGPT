import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 px-4">
      <img alt="Movie Image" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
