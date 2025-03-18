import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Carousel } from "react-bootstrap";
import "../components/Services.css";
import treeServiceImg from "../assets/images/treeservice_1.jpg";
import treeServiceImg2 from "../assets/images/treeservice_2.jpg";
import treeServiceImg3 from "../assets/images/treeservice_3.jpg";

import sodInstallationImg from "../assets/images/sodInstallation_1.jpg";
import sodInstallationImg2 from "../assets/images/sodInstallation_2.jpg";
import sodInstallationImg3 from "../assets/images/sodInstallation_3.jpg";
import sodInstallationImg4 from "../assets/images/sodInstallation_4.jpg";

import hedgeTrimmingImg from "../assets/images/hedge_Trimming_1.jpg";
import hedgeTrimmingImg2 from "../assets/images/hedge_Trimming_2.jpg";
import hedgeTrimmingImg3 from "../assets/images/hedge_Trimming_3.jpg";
import hedgeTrimmingImg4 from "../assets/images/hedge_Trimming_4.jpg";
import hedgeTrimmingImg5 from "../assets/images/hedge_Trimming_5.jpg";
import hedgeTrimmingImg6 from "../assets/images/hedge_Trimming_6.jpg";
import hedgeTrimmingImg7 from "../assets/images/hedge_Trimming_7.jpg";
import hedgeTrimmingImg8 from "../assets/images/hedge_Trimming_8.jpg";

import treePrunningImg from "../assets/images/tree_Prunning_1.jpg";
import treePrunningImg2 from "../assets/images/tree_Prunning_2.jpg";
import treePrunningImg3 from "../assets/images/tree_Prunning_3.jpg";
import treePrunningImg4 from "../assets/images/tree_Prunning_4.jpg";

import mulchApplicationImg from "../assets/images/mulch_Application_1.jpg";
import mulchApplicationImg2 from "../assets/images/mulch_Application_2.jpg";
import mulchApplicationImg3 from "../assets/images/mulch_Application_3.jpg";
import mulchApplicationImg4 from "../assets/images/mulch_Application_4.jpg";
import mulchApplicationImg5 from "../assets/images/mulch_Application_5.jpg";
import mulchApplicationImg6 from "../assets/images/mulch_Application_6.jpg";
import mulchApplicationImg7 from "../assets/images/mulch_Application_7.jpg";

import riverRocksImg from "../assets/images/River_Rocks_1.jpg";
import riverRocksImg2 from "../assets/images/River_Rocks_2.jpg";
import riverRocksImg3 from "../assets/images/River_Rocks_3.jpg";
import riverRocksImg4 from "../assets/images/River_Rocks_4.jpg";
import riverRocksImg5 from "../assets/images/River_Rocks_5.jpg";
import riverRocksImg6 from "../assets/images/River_Rocks_6.jpg";
import riverRocksImg7 from "../assets/images/River_Rocks_7.jpg";

// Lista de servicios con imágenes adicionales para el carrusel
const services = [
  {
    title: "Tree Pruning",
    desc: "Keep your trees healthy and well-shaped.",
    img: treePrunningImg,
    images: [
      treePrunningImg,
      treePrunningImg2,
      treePrunningImg3,
      treePrunningImg4,
    ],
  },
  {
    title: "Hedge Trimming",
    desc: "Maintain neat and well-defined hedges.",
    img: hedgeTrimmingImg,
    images: [
      hedgeTrimmingImg,
      hedgeTrimmingImg2,
      hedgeTrimmingImg3,
      hedgeTrimmingImg4,
      hedgeTrimmingImg5,
      hedgeTrimmingImg6,
      hedgeTrimmingImg7,
      hedgeTrimmingImg8,
    ],
  },
  {
    title: "Sod Installation",
    desc: "Get a fresh, green lawn instantly.",
    img: sodInstallationImg,
    images: [
      sodInstallationImg,
      sodInstallationImg2,
      sodInstallationImg3,
      sodInstallationImg4,
    ],
  },
  {
    title: "Tree Service",
    desc: "Professional care for your trees.",
    img: treeServiceImg,
    images: [treeServiceImg, treeServiceImg2, treeServiceImg3],
  },
  {
    title: "Mulch Application",
    desc: "Enhance soil health and curb appeal.",
    img: mulchApplicationImg,
    images: [
      mulchApplicationImg,
      mulchApplicationImg2,
      mulchApplicationImg3,
      mulchApplicationImg4,
      mulchApplicationImg5,
      mulchApplicationImg6,
      mulchApplicationImg7,
    ],
  },
  {
    title: "River Rocks",
    desc: "Aesthetic and low-maintenance landscaping solution.",
    img: riverRocksImg,
    images: [
      riverRocksImg,
      riverRocksImg2,
      riverRocksImg3,
      riverRocksImg4,
      riverRocksImg5,
      riverRocksImg6,
      riverRocksImg7,
    ],
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Función para abrir el modal con imágenes de un servicio
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <Container id="services" className="py-5">
      <h2 className="text-center">Our Services</h2>
      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card
              className="text-center p-3"
              onClick={() => handleShow(service)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={service.img}
                alt={service.title}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal con Carrusel */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService && (
            <Carousel>
              {selectedService.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${selectedService.title} ${idx + 1}`}
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Services;
