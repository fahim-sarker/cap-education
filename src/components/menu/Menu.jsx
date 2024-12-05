import React from "react";
import "./Menu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="">Courses</Link>
              <Link to="/about">Pages</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">Shop</Link>
            </Nav>
            <button className="btn"><Link to="/contact">Contact</Link></button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
