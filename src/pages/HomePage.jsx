import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { over } from "stompjs";
import SockJS from "sockjs-client";

import { UserContext } from "../contexts/UserContext";

import AuthContent from "./AuthContent";
import MessageBox from "../components/MessageBox";
import { request } from "../helpers/axiosHelper";
import NavBar from "../components/NavBar";
import FeatureBlock from "../components/FeatureBlock";

var stompClient = null;

const HomePage = () => {
  const navigate = useNavigate();
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    connect();
  }, []);

  const connect = () => {
    let Sock = new SockJS("http://localhost:5000/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log("connected");
    setUserData({ ...userData, connected: true, username: user.webname });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {};

  const onPrivateMessage = (payload) => {};

  const onError = () => {};

  const logOutHandle = () => {
    request("POST", "/api/v1/auth/logout", {}).catch((err) => {
      console.log(err);
    });
    setUser(null);
  };

  return (
    <div className=" h-[1000px]">
      {/* navbar */}
      <NavBar />
      {/* body */}
      {/* aside */}
      <MessageBox />
      {/* main */}
      <FeatureBlock />
      {/* <div className="mt-14">
        <Routes className="">
          <Route path="" element={<AuthContent />} />
        </Routes>
      </div> */}
      {/* body */}
      {/* footer */}
    </div>
  );
};

export default HomePage;
