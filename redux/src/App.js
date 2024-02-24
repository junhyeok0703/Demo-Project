import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

function App() {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: "증가하기", payload: { num: 5 } });
  };
  const cnt = useSelector((state) => state.cnt);
  const login = () => {
    dispatch({ type: "로그인", payload: { id: "혁", pw: "0000" } });
  };
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.password);
  return (
    <div>
      <h1>
        {id}
        {pw}
      </h1>
      <h1>{cnt}</h1>
      <button onClick={onClick}>+1</button>
      <button onClick={login}>login</button>
      <Box />
    </div>
  );
}

export default App;
