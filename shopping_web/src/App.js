import { Route, Routes, useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import ProductDetail from "./page/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";

//라우터역할
function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div>
      <Header logged={logged} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<ProductAll />} />;
        <Route path="/login" element={<LoginPage setLogged={setLogged} />} />;
        <Route path="/product/:id" element={<PrivateRoute logged={logged} />} />
      </Routes>
    </div>
  );
}

export default App;
