import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goproductPage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      <h1>home page</h1>
      <button onClick={goproductPage}>상품 전체 페이지이동</button>
    </div>
  );
};

export default Home;
