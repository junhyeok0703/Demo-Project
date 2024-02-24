import React from "react";
//이렇게 url파라미터로 product/1이런식으로 되게되면
// 1번째 아이템을 보고싶은거니까
// 그 url를 읽어와서 아이템list에서 꺼낼때 1번을꺼내도록 하려면
// url를 읽어와된다. 그러면 파라미터값을 읽어오도록하려면 어떻게 할까?
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>showDetailitem {id}</h1>
    </div>
  );
};

export default ProductDetail;
