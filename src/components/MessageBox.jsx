import React from "react";

import { useState, useEffect, useContext, useRef } from "react";

import { TiMessages } from "react-icons/ti";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";

import { UserContext } from "../contexts/UserContext";
import { SocketContext } from "../contexts/SocketContext";

import { request } from "../helpers/axiosHelper";

const MessageBox = () => {
  const { user } = useContext(UserContext);
  const {
    chatMap,
    connectedUsers,
    userData,
    setUserData,
    connect,
    saveMessage,
    sendPrivateValue,
  } = useContext(SocketContext);

  const [aiPrompt, setAiPrompt] = useState({
    prompt: "",
  });
  const [response, setResponse] = useState();

  const [chatOpen, setChatOpen] = useState(false);

  const endRef = useRef(null);

  const endRef2 = useRef(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMap]);

  useEffect(() => {
    endRef2.current.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest",
    });
  }, [userData.receiverWebId]);

  const handleMessage = (e) => {
    // e.preventDefault();
    const { value } = e.target;
    if (userData.receiverName === "(￣(￣(￣▽￣)￣)￣)")
      setAiPrompt({
        ...aiPrompt,
        prompt: value,
      });
    saveMessage(value);
  };

  const submitPrivateMessage = (e) => {
    e.preventDefault();
    if (userData.receiverName === "(￣(￣(￣▽￣)￣)￣)") {
      request("POST", "/ai/generate", aiPrompt)
        .then((res) => {
          console.log("Response:", res.data);
          // Optionally, save the auth token if returned by the server
          if (res.data) {
            setResponse(res.data);
          }
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        });
    } else sendPrivateValue();
  };

  const handleBot = () => {
    setUserData({
      ...userData,
      receiverName: "(￣(￣(￣▽￣)￣)￣)",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col z-20">
      <div
        className={`${
          chatOpen
            ? "w-[340px] rounded-2xl h-[530px] bg-gray-100"
            : "w-0 rounded-r-3xl h-0"
        }
            duration-200 mr-6 mb-1 shadow-2xl`}
      >
        <div
          className={`${
            !chatOpen && "hidden"
          } h-12 bg-gray-200 rounded-t-2xl flex justify-between items-center text-black`}
        >
          <button
            className={`  bg-gray-300 p-1.5 rounded-full ml-2 hover:scale-110 active:scale-95`}
            // onClick={trial}
          >
            <HiChatBubbleBottomCenter />
          </button>
          <button
            className={`bg-gray-300 p-1.5 rounded-full mr-2 hover:scale-105 active:scale-95`}
            onClick={handleBot}
          >
            <SiChatbot />
          </button>
        </div>
        <div
          className={`${
            !chatOpen && "hidden"
          } flex space-x-2 mx-1 mt-2 overflow-x-auto no-scrollbar`}
        >
          {connectedUsers.map((u) => (
            <div
              key={u.email}
              className="flex flex-col justify-center items-center min-h-8 min-w-8"
              onClick={() => {
                // setTab(u?.firstname + " " + u?.lastname);
                setUserData({
                  ...userData,
                  receiverName: u?.firstname + " " + u?.lastname,
                  receiverWebId: u?.webId,
                });
              }}
            >
              <img
                className="w-8 h-8 rounded-full bg-white"
                src="/src/assets/images/userAvatar.png"
                alt="Jese image"
              ></img>
              <div
                className={`h-2.5 w-2.5 bg-green-500 rounded-full -mt-2.5 -mr-6 border-gray-100 border-2 ${
                  u?.state == "ONLINE" ? "" : "hidden"
                }`}
              ></div>
              <span className="text-black text-[10px] ">
                {(u?.firstname).slice(0, 5)}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`${
            !chatOpen && "hidden"
          } block my-1 mx-1 shadow-md rounded-full  bg-gray-200`}
        >
          <span className="text-sm pl-3 font-semibold text-gray-900">
            {userData.receiverName}
          </span>
        </div>
        <div>{response}</div>

        <div
          className={`${
            !chatOpen && "hidden"
          }  mx-3 mt-3 h-[340px] overflow-y-auto space-y-3 scrollbar-thin flex flex-col `}
        >
          {chatMap.get(userData.receiverWebId) &&
            chatMap.get(userData.receiverWebId).map((chat, index) =>
              chat.senderWebId !== userData.userWebId ? (
                <div key={index} className="flex items-start gap-1">
                  <img
                    className="w-6 h-6 rounded-full bg-white"
                    src="/src/assets/images/userAvatar.png"
                    alt="Jese image"
                  ></img>
                  <div className="flex flex-col max-w-[150px] leading-1.5 p-1 border-gray-200 bg-white rounded-e-xl rounded-es-xl ">
                    <div className="flex items-center space-x-2 mx-1">
                      <span className="text-xs font-semibold text-gray-900 ">
                        {/* Bonnie Green */}
                        {userData.receiverName}
                      </span>
                      <span className="text-xs font-normal text-gray-500 ">
                        11:46
                      </span>
                    </div>
                    <p className="text-xs font-thin font-serif p-1 text-gray-900 ">
                      {/* That's awesome. I think our users will really appreciate
                      the improvements. */}
                      {chat?.content}
                    </p>
                  </div>
                  <BsThreeDotsVertical className="text-gray-400 rounded mt-2 hover:bg-gray-200 active:bg-gray-300"></BsThreeDotsVertical>
                </div>
              ) : (
                <div className="flex items-start gap-1 justify-end" key={index}>
                  <BsThreeDotsVertical className="text-gray-400 rounded mt-2 hover:bg-gray-200 active:bg-gray-300"></BsThreeDotsVertical>
                  <div className="flex flex-col max-w-[150px] leading-1.5 p-1 border-gray-200 bg-white rounded-ee-xl rounded-l-xl ">
                    <div className="flex items-center justify-end space-x-2 mx-1">
                      <span className="text-xs font-normal text-gray-500 ">
                        11:46
                      </span>
                      <span className="text-xs font-semibold text-gray-900 ">
                        {/* Bonnie Green */}
                        {user?.firstname + " " + user?.lastname}
                      </span>
                    </div>
                    <p className="text-xs font-thin font-serif p-1 text-gray-900 ">
                      {/* That's awesome. I think our users will really appreciate
                      the improvements. */}
                      {chat?.content}
                    </p>
                    {/* <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span> */}
                  </div>
                  <img
                    className="w-6 h-6 rounded-full bg-white"
                    src="/src/assets/images/userAvatar.png"
                    alt="Jese image"
                  ></img>
                </div>
              )
            )}
          <div ref={endRef} className="w-0 h-0 p-0 m-0 border-0" />
          <div ref={endRef2} className="w-0 h-0 p-0 m-0 border-0" />
        </div>

        <div className={`${!chatOpen && "hidden"}`}>
          <form onSubmit={submitPrivateMessage} className="flex mx-2">
            <input
              type="text"
              className="w-full h-10 text-xs p-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent "
              placeholder="enter the message"
              value={userData.message}
              onChange={handleMessage}
            />
            <button
              type="submit"
              className="rounded px-1 hover:bg-gray-200 active:bg-gray-300"
            >
              <RiSendPlane2Fill className="size-5" color="gray" ></RiSendPlane2Fill>
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-500 rounded-full p-4 shadow-lg shadow-gray-300 hover:scale-110 active:scale-95"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <TiMessages />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
