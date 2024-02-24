import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Btnbox.css";

const Btnbox = ({ locals, setCity, getCurrentLocation }) => {
  return (
    <div>
      <button onClick={getCurrentLocation}>현재 위치</button>
      {locals.map((item) => (
        <button key={uuidv4()} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Btnbox;
