import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {

    
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
          <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ marginRight: "20px" }}>
              <Nav.Link as={Link} to="/pong">Pong</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComp;
