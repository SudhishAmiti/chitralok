import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpCommingMovies from "../hooks/getUpCommingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import { Outlet } from "react-router-dom";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useUpCommingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
    <Header />
    <Outlet/>
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      
    </div>
  );
};

export default Browse;
