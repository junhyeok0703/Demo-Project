import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  let [query, setQuery] = useSearchParams();
  console.log("pants", query.get("q"));
  return (
    <div>
      <h1> show All Product</h1>
    </div>
  );
};

export default Product;
