import React from "react";
import { useState } from "react";
import { request } from "../helpers/axiosHelper";

const TestPage = () => {
  const [userData, setUserData] = useState({
    prompt: "",
  });

  const [response, setResponse] = useState();

  const submitPrompt = (e) => {
    e.preventDefault();
    request("POST", "/ai/generate", userData)
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
  };

  return (
    <div>
      <form onSubmit={submitPrompt}>
        <input
          type="text"
          id="prompt"
          name="prompt"
          className="p-1.5 rounded-md"
          placeholder="tell me a joke"
          required
          value={userData.prompt}
          onChange={(e) =>
            setUserData({
              ...userData,
              prompt: e.target.value,
            })
          }
        />
        <button
          className="bg-slate-500 rounded-lg p-1.5 hover:bg-slate-400"
          type="submit"
        >
          generate
        </button>
      </form>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default TestPage;
