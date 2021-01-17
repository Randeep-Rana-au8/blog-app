import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

export const RegisterForm = withRouter((props) => {
  // axios.post("http://localhost:3400/register",)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3400/register", {
        name: username,
        email: email,
        password: password,
      });
      console.log(res);
      setEmail("");
      setUserName("");
      setPassword("");
      console.log(props);
      props.history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container md={{ offset: 5 }}>
      <Col md={5}>
        <Form>
          <FormGroup>
            <Form.Label for="name">Name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              id="name"
              required
              type="text"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label for="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label for="pass">Password</Form.Label>
            <Form.Control
              id="pass"
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormGroup>

          <Button
            type="submit"
            onClick={handleRegister}
            variant="outline-primary"
          >
            Submit
          </Button>
          <span style={{ marginLeft: "10px" }}>
            Existing User? <Link to="/login">Login Here</Link>
          </span>
        </Form>
      </Col>
    </Container>
  );
});

export const LoginForm = withRouter((props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3400/login", {
        email: email,
        password: password,
      });
      console.log(res);
      props.history.push("/posts");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Container md={{ offset: 5 }}>
      <Col md={5}>
        <Form>
          <FormGroup>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="pass">Password</Form.Label>
            <Form.Control
              id="pass"
              type="text"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="submit"
              onClick={handleLogin}
              variant="outline-primary"
            >
              Submit
            </Button>
            <span style={{ marginLeft: "10px" }}>
              New User? <Link to="/register">SignUp</Link>
            </span>
          </FormGroup>
        </Form>
      </Col>
    </Container>
  );
});

// export const RegisterForm = withRouter(Register);
