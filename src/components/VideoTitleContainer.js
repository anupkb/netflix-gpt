import React from "react";

const VideoTitleContainer = ({ title, overview }) => {
  return (
    <div className="absolute top-32 left-0 pt-36 px-12 z-10 text-white">
      <h4 className="text-3xl font-semibold">{title}</h4>
      <p className="py-6 text-md w-2/4">{overview}</p>
      <div className="">
        <button className="border rounded-md px-10 py-1.5 m-1 text-sm text-gray-800  bg-gray-300">
          Play
        </button>
        <button className="rounded-md px-7 py-1.5 m-1 text-sm text-white bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleContainer;
