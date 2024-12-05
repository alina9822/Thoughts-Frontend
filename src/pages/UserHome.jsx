import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

import AuthContent from "./AuthContent";
import { request } from "../helpers/axiosHelper";
import UserLayout from "../layouts/UserLayout";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="">
      <UserLayout>
        <div className="mt-14">
          <Routes className="">
            <Route path="" element={<AuthContent />} />
          </Routes>
        </div>
        {/* body */}
        {/* footer */}
      </UserLayout>
    </div>
  );
};

export default ProfilePage;
