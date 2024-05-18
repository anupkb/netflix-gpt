import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black">
        <Link to="/">
          <img
            className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </Link>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="p-5 py-2 rounded text-white bg-red-700 text-base font-normal"
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default Header;
