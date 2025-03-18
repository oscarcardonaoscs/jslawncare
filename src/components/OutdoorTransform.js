import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSeedling, FaTree, FaLeaf } from "react-icons/fa";
import lawnMaintenance from "../assets/images/michael-smith-bsld7GjQwjI-unsplash.jpg";
import sodInstallation from "../assets/images/istockphoto-1820805377-2048x2048.jpg";

const OutdoorTransform = () => {
  return (
    <div id="outdoorTransform" className="outdoor-section">
      <Container>
        {/* Título */}
        <Row>
          <Col className="text-center">
            <h2 className="outdoor-title">
              Transform your outdoor oasis with J'S Lawn Care, <br />
              where quality and dedication shape every project...
            </h2>
          </Col>
        </Row>

        {/* Contenido */}
        <Row className="align-items-center mt-4">
          <Col md={6}>
            <div className="service">
              <FaLeaf className="service-icon" />
              <div>
                <h4>Expert Lawn Maintenance</h4>
                <p>
                  We ensure your lawn remains luscious and healthy with our
                  precise mowing techniques tailored to your needs.
                </p>
              </div>
            </div>

            <div className="service">
              <FaSeedling className="service-icon" />
              <div>
                <h4>Quality Sod Installation</h4>
                <p>
                  Transform your landscape with high-quality sod that enhances
                  the beauty and vibrancy of your outdoor space.
                </p>
              </div>
            </div>

            <div className="service">
              <FaTree className="service-icon" />
              <div>
                <h4>Professional Shrub Trimming</h4>
                <p>
                  Our expert team provides meticulous shrub trimming to maintain
                  the aesthetics and health of your garden.
                </p>
              </div>
            </div>
          </Col>

          {/* Imágenes estilo Polaroid */}
          <Col md={6} className="text-center">
            <div className="image-stack">
              <img src={sodInstallation} alt="Lawn care" className="img-back" />
              <img
                src={lawnMaintenance}
                alt="Lawn mowing"
                className="img-front"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OutdoorTransform;
