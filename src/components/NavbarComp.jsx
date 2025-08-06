import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const NavbarComp = () => {

  const {bgColor, setBgColor} = useGlobalContext();
  const {dark, setDark} = useGlobalContext();

  function toggleColorMode() {
    if(dark === "dark") {
      setDark("gray")
      setBgColor("linear-gradient(to bottom, #c7b2b2ff, #444 60%, #fff 85%")
    }
    else{
      setDark("dark")
      setBgColor("linear-gradient(to bottom, #121212, #333 60%, #eee 85%")
    }
  }
    
  return (
    <>
      <Navbar expand="sm" bg={dark} data-bs-theme={dark} sticky="top">
          <Navbar.Brand as={Link} to="/home" style={{marginLeft:"20px"}}>Home</Navbar.Brand>
          <Button variant="outline-secondary" size="sm" onClick={toggleColorMode}>
          {dark === "dark" ? "lightTheme" : "darkTheme"}
        </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ marginRight: "20px" }}>
              <Nav.Link as={Link} to="/gamepage">GamePage</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComp;
