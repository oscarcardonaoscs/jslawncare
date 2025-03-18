import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/images/JS Logo resized.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div>
      {/* Información de contacto */}
      <div
        className="contact-info"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <span>
          <FaPhone style={{ marginRight: "8px" }} /> (256) 262-9151 |{" "}
          <FaEnvelope style={{ marginRight: "8px" }} /> jsbestlawncare@gmail.com
        </span>
      </div>

      {/* Barra de navegación */}
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
    </div>
  );
};

export default NavigationBar;
