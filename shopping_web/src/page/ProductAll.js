import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import { useSearchParams } from "react-router-dom";

import { productAction } from "../redux/productAction";
import { useDispatch, useSelector } from "react-redux";
const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setquery] = useSearchParams();

  const dispatch = useDispatch();
  console.log(query);
  const handleData = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.handleData(searchQuery));
  };

  useEffect(() => {
    handleData();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList &&
            productList.map((item) => {
              return (
                <Col log={3}>
                  <ProductItem item={item} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
