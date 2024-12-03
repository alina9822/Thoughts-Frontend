import React from "react";
import { useState, useContext } from "react";

import { over } from "stompjs";
import SockJS from "sockjs-client";

import { UserContext } from "./UserContext";
import { getAuthToken, request } from "../helpers/axiosHelper";

const SocketContext = React.createContext({});

var stompClient = null;
const SocketContextProvider = ({ children }) => {
  //   const [user, setUser] = useState(getInitialState);

  const headers = {
    Authorization: `Bearer ${getAuthToken()}`,
  };

  const { user } = useContext(UserContext);

  // const [message, setMessage] = useState("");

  const [chatMap, setChatMap] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [userData, setUserData] = useState({
    userWebId: "",
    receiverWebId: "",
    receiverName: "",
    connected: false,
    message: "",
  });

  const connect = () => {
    let Sock = new SockJS("http://localhost:5000/ws");
    stompClient = over(Sock);
    stompClient.connect(headers, onConnected, onError);
  };

  const onConnected = () => {
    console.log("connected");
    setUserData({ ...userData, connected: true, userWebId: user.webId });
    // stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + user.webId + "/queue/messages",
      onPrivateMessage //onPrivateMessageReceived
    );
    userJoin();
  };

  const userJoin = () => {
    // var chatMessage = {
    //   senderWebId: user.webId,
    //   type: "JOIN",
    // };
    // stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    findConnectedUsers();
    findPreviousChats();
  };

  const findConnectedUsers = () => {
    request("GET", "/connectedUsers", {})
      .then((res) => {
        console.log(res.data);
        setConnectedUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findPreviousChats = () => {
    request("GET", "/messages/all/" + user.webId, {})
      .then((res) => {
        console.log(res.data);
        const newChatMap = new Map();
        res.data.forEach((chat) => {
          const { receiverWebId, messages } = chat;
          console.log(messages.length);
          if (messages.length > 0) {
            newChatMap.set(receiverWebId, messages);
          }
        });
        setChatMap(newChatMap);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onMessageReceived = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.type) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderWebId)) {
          privateChats.set(payloadData.senderWebId, []);
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log("Received private message:", payloadData);
    // setMessage(payloadData);
    setChatMap((prevChatMap) => {
      console.log("Updating chatMap with:", payloadData);
      const newChatMap = new Map(prevChatMap);
      if (!newChatMap.has(payloadData.senderWebId)) {
        newChatMap.set(payloadData.senderWebId, []);
      }
      newChatMap.get(payloadData.senderWebId).push(payloadData);
      return newChatMap;
    });
  };

  const onError = (err) => {
    console.log(err);
  };

  const saveMessage = (value) => {
    setUserData({ ...userData, message: value });
  };

  // const sendvalue = () => {
  //   if (stompClient) {
  //     var chatMessage = {
  //       senderWebId: user.webId,
  //       content: userData.message,
  //       type: "MESSAGE",
  //     };
  //     console.log(chatMessage);
  //     stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  //     setUserData({ ...userData, message: "" });
  //   }
  // };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderWebId: userData.userWebId,
        receiverWebId: userData.receiverWebId,
        content: userData.message,
        type: "MESSAGE",
      };

      // setMessage(chatMessage);

      console.log("Sending private message:", chatMessage);

      if (userData.userWebId !== userData.receiverWebId) {
        setChatMap((prevChatMap) => {
          console.log("Updating chatMap with:", chatMessage);
          const newChatMap = new Map(prevChatMap);
          const chatKey = userData.receiverWebId;
          if (!newChatMap.has(chatKey)) {
            newChatMap.set(chatKey, []);
          }
          newChatMap.get(chatKey).push(chatMessage);
          return newChatMap;
        });
      }

      // console.log(chatMessage);
      stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <SocketContext.Provider
      value={{
        chatMap,
        setChatMap,
        publicChats,
        setPublicChats,
        connectedUsers,
        setConnectedUsers,
        userData,
        setUserData,
        connect,
        saveMessage,
        sendPrivateValue,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
