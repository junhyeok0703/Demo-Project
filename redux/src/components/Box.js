import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  let cnt = useSelector((state) => state.cnt);
  return <div>{cnt}</div>;
};

export default Box;
