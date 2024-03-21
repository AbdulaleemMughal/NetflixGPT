import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-52 m-5"
        />
      </div>

      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
