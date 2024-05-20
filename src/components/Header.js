import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const loginUser = useSelector((state) => state.user);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        navigate("/browse");

        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    if (loginUser) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [loginUser]);

  const handleToggle = async () => {
    const auth = getAuth();
    if (isSignedIn) {
      try {
        await signOut(auth);
        setIsSignedIn(false);
        navigate("/");
      } catch (error) {
        console.error("Sign out error: ", error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img className="w-44" src={LOGO} alt="logo" />
        </Link>

        {loginUser ? (
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">TV Shows</Link>
              </li>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/">New & Popular</Link>
              </li>
              <li>
                <Link to="/">My List</Link>
              </li>
              <li>
                <Link to="/">Browse By Languages</Link>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center space-x-4">
        {loginUser ? (
          <Link to="/">
            <img src={USER_AVATAR} className="w-7 h-7" alt="userAvatar" />
          </Link>
        ) : (
          ""
        )}

        <button
          onClick={handleToggle}
          className="p-3 py-2 rounded text-white bg-red-600  text-sm font-normal"
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
