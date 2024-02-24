import "./App.css";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import { useState } from "react";
import User from "./User";

// Link는 이동할 경로를 설정해줘서 클릭하면 이동하도록
//페이지이동하나 더있음 useNavigate -> 함수로 할수있음.
//리다이렉션 -> Navigate

function App() {
  const [isUser, setIsUser] = useState(false);

  const PrivateRoute = () => {
    return isUser === true ? <User /> : <Navigate to="/login" />;
  };
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">홈</Link>
        <Link to="/about">about</Link>
        <Link to="/product">product</Link>
        <Link to="/login">login</Link>
        <Link to="/user">user</Link>
      </div>
      <button onClick={GoToHomePage}>홈페이지이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* 전체상품을 보이는 페이지가 있고 그 디테일 페이지를 들어가려면 또 route를 만들고 나서 추가해줘야한다. 그러면 100개의 아이템의 디테일 페이지를 만들기위해서 100개의 라우트를  설정해줘야함 
        그런것을 바꾸려고 Restful Route(url디자인패턴)이다
        약간 detail-product라고 할까 이런 url의 이름이 고민되는데
        detail은 하나하나 보여줘야하고 동적인값이 들어가게 되니까
        /product/:id로 하여서 디테일 페이지를 만들수있다.
        이를 이용하여 동적인 값이 url뒤에 들어가게해서 라우트를 자동으로 바꿔주는것이다. */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
