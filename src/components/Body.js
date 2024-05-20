import React from "react";
import { useNavigate } from "react-router-dom";
import { BG_IMG } from "../utils/constants";

const Body = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src={BG_IMG}
          alt="homeImage"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold pb-5">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-2xl pb-4">Watch anywhere. Cancel anytime.</h4>
            <h4 className="text-xl pb-4">
              Ready to watch? Enter your email to create and start your
              membership.
            </h4>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="px-8 py-2 rounded text-white bg-red-700 text-base font-normal"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
