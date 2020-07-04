import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../Costues-Logo.png";
import "../../style.css";

function NavigationBar() {
  return (
    <Navbar
      className="justify-content-center"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img id="logo" src={logo} alt="logo" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer exact to="/">
            <Nav.Link id="navbar">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/about">
            <Nav.Link id="navbar">About</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/player">
            <Nav.Link id="navbar">Music</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/contact">
            <Nav.Link id="navbar">Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/login">
            <Nav.Link>
              <button id="login-btn">LOGOUT</button>
              
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
