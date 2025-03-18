import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section text-white text-center">
      <Container>
        <h1>Excellence is Great Quality</h1>
        <p>
          Professional lawn care services to keep your yard looking its best.
        </p>
        <Button variant="light" size="lg" href="#quote-form">
          Get a Free Quote
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
