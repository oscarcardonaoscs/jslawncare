import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import treeservice1 from "../assets/images/treeservice_1.jpg";
import treeservice2 from "../assets/images/treeservice_2.jpg";
import treeservice3 from "../assets/images/treeservice_3.jpg";

const images = [treeservice1, treeservice2, treeservice3];

const Portfolio = () => {
  return (
    <Container
      fluid
      id="portfolio"
      className="py-5 text-center w-100 m-0 px-0"
      style={{ backgroundColor: "#008000" }}
    >
      <h2>Our Portfolio</h2>
      <Row className="mt-4">
        {images.map((img, index) => (
          <Col md={4} key={index}>
            <Image src={img} fluid className="rounded shadow-sm" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
