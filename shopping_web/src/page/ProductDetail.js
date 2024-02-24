import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { productDetailAction } from "../redux/productDetailAction";
import { useDispatch } from "react-redux";
const ProductDetail = () => {
  //디테일은 그냥 뿌려주기만 하기
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productlist, setProductList] = useState([]);
  const getProductDetail = () => {
    dispatch(productDetailAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={productlist?.img} />
          </Col>
          <Col>
            <p>{productlist?.title} </p>

            <p>{productlist?.price} </p>
            <DropdownButton id="Warning" title="옷사이즈선택">
              <Dropdown.Item href="#">S</Dropdown.Item>
              <Dropdown.Item href="#">M</Dropdown.Item>
              <Dropdown.Item href="#">L</Dropdown.Item>
            </DropdownButton>
            <Button variant="dark">추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
