import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/images/JS Logo resized.png";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom navbar-light">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo} // Ruta de la imagen
            alt="J'S Lawn Care Logo" // Texto alternativo
            style={{ width: "60px", height: "60px", marginRight: "10px" }} // Ajusta el tamaño de la imagen
          />
          J'S Lawn Care
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#outdoorTransform">Outdoor Transform</Nav.Link>
            <Button variant="light" href="#quote-form" className="quote-link">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
