import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Routes, Route, Link, useNavigate ,Outlet} from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

import AuthContent from "./AuthContent";
import { request } from "../helpers/axiosHelper";
import UserLayout from "../layouts/UserLayout";
import Blogs from "../components/Blogs";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="">
      <UserLayout />
      {/* body */}
      {/* footer */}
      <main>
        <Routes>
          <Route path="blogs" element={<Blogs />}></Route>
        </Routes>
        {/* <Outlet />  */}
      </main>
      {/* </UserLayout> */}
    </div>
  );
};

export default ProfilePage;
