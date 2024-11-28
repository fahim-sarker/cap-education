import React from "react";
import "./Menu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="menu-bg">
        <Container id="navbar">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Courses</Nav.Link>
              <Nav.Link href="#contact">Pages</Nav.Link>
              <Nav.Link href="#contact">Blog</Nav.Link>
              <Nav.Link href="#contact">Shop</Nav.Link>
            </Nav>
            <button className="btn">Get In Touch</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
