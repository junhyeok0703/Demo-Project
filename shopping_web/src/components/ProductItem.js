import React from "react";
import { useNavigate } from "react-router-dom";
const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const GoDeatilpage = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={GoDeatilpage} className="card-border">
      <img src={item.img} width={200} height={200} />
      <h5>{item.title}</h5>
      <h6>{item.price}</h6>
      <p>{item.new && "신제품"}</p>
    </div>
  );
};

export default ProductItem;
