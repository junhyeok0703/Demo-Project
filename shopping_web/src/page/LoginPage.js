import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"; // Change to useNavigate
import { Container } from "react-bootstrap";
import "./LoginPage.css";

import { useDispatch } from "react-redux";
import { loggedAction } from "../redux/loggedAction";

const LoginPage = ({ setLogged }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Change to useNavigate
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loggedAction.login(id, password));
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setId(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
