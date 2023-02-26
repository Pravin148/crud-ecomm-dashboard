import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState({
    uname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "content-type": "application/json",
      },
    });
    // for local storage of data
    result = await result.json();
    localStorage.setItem("token", JSON.stringify(result.auth));
    localStorage.setItem("user", JSON.stringify(result.result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="w-100% pt-[40px] flex justify-center min-h-screen">
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="uname"
              className="block text-grey-700  font-bold mb-2"
            >
              Name{" "}
            </label>
            <input
              type="text"
              name="uname"
              value={state.uname}
              className="name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-grey-700  font-bold mb-2"
            >
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              className="email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-grey-700  font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              className="password shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
