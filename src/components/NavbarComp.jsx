import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { useCookies } from "react-cookie";

const NavbarComp = () => {

  const {bgColor, setBgColor} = useGlobalContext();
  const {dark, setDark} = useGlobalContext();
  const [cookies, setCookie] = useCookies(["jwtToken"]);

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
              <Nav.Link style={{marginRight:"40px"}} as={Link} to="/gamepage">GamePage</Nav.Link>
              {cookies.jwtToken == "" || cookies.jwtToken == null ?(
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              ) : "" }
              {cookies.jwtToken == "" || cookies.jwtToken == null ?(
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              ) : "" }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComp;
