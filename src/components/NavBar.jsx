import React from "react";
import { useContext, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import { request } from "../helpers/axiosHelper";

import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showBookSession, setShowBookSession] = useState(false);

  const logOutHandle = () => {
    request("POST", "/api/v1/auth/logout", {}).catch((err) => {
      console.log(err);
    });
    logout();
  };

  return (
    <div className="fixed top-0 left-0 z-10 border-r-0  w-full ">
      <div className="h-[75px] bg-white bg-opacity-85 flex justify-between items-center shadow-md border border-yellow-200">
        <div className="ml-5">
          {/* header */}
          <h1 className="text-5xl font-bold text-gray-800">Thoughts</h1>
          {/* <img src="src/assets/images/logo.png" className="h-[75px]" /> */}
        </div>
        <div className="flex justify-between items-center gap-x-6 text-navText">
          <Link
            to=""
            onMouseEnter={() => setShowBookSession(true)}
            onMouseLeave={() => setShowBookSession(false)}
          >
            Book Session
          </Link>
          <div>Journal</div>
          <div>Islamestic</div>
          <div>CBT and More</div>
          <div>Donate</div>
        </div>

        <div
          className="mr-8 flex h-14 gap-5 items-center  "
          onMouseEnter={() => setShowUserMenu(true)}
          onMouseLeave={() => setShowUserMenu(false)}
        >
          <IoNotificationsOutline className="size-6" />
          <img
            className="w-8 h-8 rounded-full border bg-white"
            src="/src/assets/images/userAvatar.png"
            alt="Jese image"
          ></img>
        </div>
      </div>
      <div
        className={`h-44 w-36 list-none bg-white divide-y divide-gray-100 text-xs fixed right-2 -mt-5 z-50 shadow rounded-lg ${
          !showUserMenu && "hidden"
        }`}
        onMouseEnter={() => setShowUserMenu(true)}
        onMouseLeave={() => setShowUserMenu(false)}
      >
        <div className="px-3 py-2">
          <span className="block text-gray-900 dark:text-white">
            {user?.firstname} {user?.lastname}
          </span>
          <span className="block text-gray-500 truncate dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 "
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 "
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 "
            >
              Earnings
            </a>
          </li>
          <li>
            <Link
              onClick={logOutHandle}
              className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 "
            >
              Log out
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`h-[75px] bg-gray-500 flex justify-between items-center  ${
          !showBookSession && "hidden"
        }`}
      ></div>
    </div>
  );
};

export default NavBar;
