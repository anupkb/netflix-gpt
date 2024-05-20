import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignupData } from "../utils/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";

const SignUp = () => {
  const auth = getAuth();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = validateSignupData(
      formData.name,
      formData.email,
      formData.password
    );
    setErrorMessage(message);

    if (message) return;

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <>
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="homeImage"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-md bg-black opacity-75">
            <div className="mx-7 my-16">
              <div className="w-80 px-4 pb-6">
                <h3 className="w-full text-4xl text-white font-bold">
                  Sign Up
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="w-80 m-6">
                  <input
                    className="w-full px-2 py-3 rounded-sm border bg-black text-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div className="w-80 m-6">
                  <input
                    className="w-full px-2 py-3 rounded-sm border bg-black text-white"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div className="w-80 m-6">
                  <input
                    className="w-full px-2 py-3 rounded-sm border bg-black text-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>

                <p className="pl-6 text-basic text-red-600">{errorMessage}</p>

                <div className="w-80 m-6">
                  <button
                    type="submit"
                    name="signup"
                    className="w-full px-2 py-3 rounded-sm text-white bg-red-700 text-base font-normal"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mb-12">
                <span className="text-white">
                  Already a member?{" "}
                  <Link
                    to="/login"
                    className="text-base text-white font-semibold"
                  >
                    Login to watch.
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
