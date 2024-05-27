import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { OPTIONS } from "../../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        OPTIONS
      );

      const jsonData = await response.json();

      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useNowPlayingMovies;
