"use client";

import { useEffect, useState } from "react";

const UserName = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("userName") || "";
    setUserName(userName);
  }, []); // Empty dependency array ensures this runs once on mount
  return <div>{userName && userName}</div>;
};

export default UserName;
