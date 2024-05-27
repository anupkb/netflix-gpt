import React, { useEffect } from "react";
import { OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../../utils/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        OPTIONS
      );

      const jsonData = await data.json();

      const movieVideos = jsonData.results.filter(
        (video) => video.name == "Official Trailer"
      );

      const movieTrailer = movieVideos.length ? movieVideos[0] : movieVideos[0];
      dispatch(addMovieTrailer(movieTrailer));
      //
    } catch (error) {
      console.log(`Failed to fetch the data: ${error}`);
    }
  };
};

export default useMovieVideos;
