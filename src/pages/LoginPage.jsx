import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { setAuthHeader } from "../helpers/axiosHelper";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const submitForm = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/api/v1/auth/authenticate", userData)
      .then((res) => {
        if (res.data !== null) {
          setAuthHeader(res.data.token);
          login(res.data);
          return navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-indigo-100 h-screen text-xs flex items-center justify-center ">
      <div className="bg-indigo-50 p-10 rounded-2xl w-[300px]">
        <form onSubmit={submitForm} className="flex flex-col space-y-5">
          <h2 className="mx-auto text-lg text-slate-500 font-bold">Log in</h2>
          <div className="flex justify-between items-center">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="p-1.5 rounded-md"
              placeholder="eg. zaman@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="pwd" className="">
              Password
            </label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className="p-1.5 rounded-md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-white p-2 rounded-md hover:bg-indigo-300"
            >
              Log in
            </button>
          </div>
          <div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
