import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./QuoteForm.css";
import lawnImage from "../assets/images/rasa-kasparaviciene-PUiy7hone_I-unsplash.jpg"; // Asegúrate de usar la ruta correcta

const QuoteForm = () => {
  return (
    <div id="quote-form" className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center">
            <img src={lawnImage} alt="Lawn Care" className="contact-image" />
          </Col>

          {/* Formulario a la derecha */}
          <Col md={6}>
            <h2 className="text-white">
              Revitalize your outdoor space with J'S Lawn Care
            </h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Contact Number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button className="submit-btn" type="submit">
                SUBMIT INQUIRY
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QuoteForm;
