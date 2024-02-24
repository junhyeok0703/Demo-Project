import React from "react";
import "./Weatherbox.css";

const Weatherbox = ({ weatherdata }) => {
  return (
    <div>
      <div>
        <h3>{weatherdata?.name}</h3>
        <h1>{weatherdata?.main?.temp}</h1>
        <p>{weatherdata?.weather?.[0]?.description}</p>
      </div>
    </div>
  );
};

export default Weatherbox;
