import React, { useEffect } from "react";
import { useState } from "react";
import { request } from "../helpers/axiosHelper";

const AuthContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/messages", {})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(["unatuthorized"]);
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default AuthContent;
