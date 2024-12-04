import React from "react";
import MessageBox from "../components/MessageBox";
import { request } from "../helpers/axiosHelper";
import NavBar from "../components/NavBar";
import Blogs from "../components/Blogs";

const UserLayout = () => {
  return (
    <>
      <NavBar />
      <MessageBox />
      <Blogs />
      
    </>
  );
};

export default UserLayout;
