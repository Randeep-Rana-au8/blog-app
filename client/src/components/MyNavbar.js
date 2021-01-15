import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Medium</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav>
            <Link style={{ color: "white" }} to="/posts">
              Posts
            </Link>
          </Nav>
          <Nav>
            <Link style={{ color: "white" }} to="/login">
              Login
            </Link>
          </Nav>
          <Nav>
            <Link style={{ color: "white" }} to="/register">
              SignUp
            </Link>
          </Nav>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default MyNavbar;
