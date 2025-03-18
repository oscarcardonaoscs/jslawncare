import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Si decides usar un archivo CSS para el footer
import logo from "../assets/images/JS Logo resized.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center py-2">
          <Col>
            <img
              src={logo} // Ruta de la imagen
              alt="J'S Lawn Care Logo" // Texto alternativo
              style={{ width: "60px", height: "60px", marginRight: "10px" }} // Ajusta el tamaño de la imagen
            />
          </Col>
          <Col>
            <p>
              Follow us on:
              <a
                href="https://www.facebook.com/profile.php?id=100054619412060"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebook size={30} color="#1877F2" />
              </a>{" "}
            </p>
          </Col>
          <Col>
            <p>© 2025 J'S Lawn Care. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
