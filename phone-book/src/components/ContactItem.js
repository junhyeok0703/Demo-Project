import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg="1">
          <img
            className="profile"
            src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
            width={50}
          />
        </Col>
        <Col lg="11">
          <h4>{item.name}</h4>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
