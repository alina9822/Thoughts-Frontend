import React from "react";
import MessageBox from "../components/MessageBox";
import { request } from "../helpers/axiosHelper";
import NavBar from "../components/NavBar";
import FeatureBlock from "../components/FeatureBlock";

const UserLayout = () => {
  return (
    <>
      <NavBar />
      <MessageBox />
      <FeatureBlock />
      
    </>
  );
};

export default UserLayout;
