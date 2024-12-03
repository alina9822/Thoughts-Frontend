import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { setAuthHeader } from "../helpers/axiosHelper";
import { UserContext } from "../contexts/UserContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  const { login } = useContext(UserContext);

  const submitForm = (e) => {
    e.preventDefault();
    const newUser = {
      firstname,
      lastname,
      email,
      password,
      role,
    };

    axios
      .post("http://localhost:5000/api/v1/auth/register", newUser)
      // request("POST", "/api/v1/auth/register", newUser)
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
          <h2 className="mx-auto text-lg text-slate-500 font-bold">Register</h2>
          <div className="flex justify-between items-center">
            <label htmlFor="type" className="">
              Role
            </label>
            <select
              id="type"
              name="type"
              className="p-1.5 rounded-md"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="THERAPIST">Therapist</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="firstname" className="">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="p-1.5 rounded-md"
              placeholder="eg. Alina"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="lastname" className="">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="p-1.5 rounded-md"
              placeholder="eg. zaman"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
              Register
            </button>
          </div>
          <div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
