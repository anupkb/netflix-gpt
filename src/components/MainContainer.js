import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitleContainer from "./VideoTitleContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { id, original_title, overview } = mainMovie;

  return (
    <>
      <VideoContainer movieId={id} />
      <VideoTitleContainer title={original_title} overview={overview} />
    </>
  );
};

export default MainContainer;
