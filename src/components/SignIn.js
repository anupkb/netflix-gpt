import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateLoginData } from "../utils/Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";
import { BG_IMG } from "../utils/constants";

const SignIn = () => {
  const auth = getAuth();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = validateLoginData(formData.email, formData.password);
    setErrorMessage(message);

    if (message) return;

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
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
          src={BG_IMG}
          alt="homeImage"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-md bg-black opacity-75">
            <div className="mx-7 my-16">
              <div className="w-80 px-4 pb-6">
                <h3 className="w-full text-4xl text-white font-bold">
                  Sign In
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
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
                    name="signin"
                    className="w-full px-2 py-3 rounded-sm text-white bg-red-700 text-base font-normal"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center mb-12">
                <span className="text-white">
                  New to Netflix?{" "}
                  <Link
                    to="/signup"
                    className="text-base text-white font-semibold"
                  >
                    Sign up now.
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

export default SignIn;
