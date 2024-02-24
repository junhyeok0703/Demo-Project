import React from "react";
import "./Box.css";
import styled from "styled-components";
import paper from "../img/paper.png";
const Box = ({ title, userimg, score }) => {
  return (
    <Boxs>
      <h1>{title}</h1>
      <img src={userimg}></img>
      <p>{score}</p>
    </Boxs>
  );
};

export default Box;
const Boxs = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
  text-align: center;
`;
