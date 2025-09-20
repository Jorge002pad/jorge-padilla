import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
      <section id="contact">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center text-center">
          <Col md={3}>
            <a href="https://www.linkedin.com/in/jorgepad-dev/" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaLinkedin size={40} />
              <p className="mt-2">LinkedIn</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://github.com/Jorge002pad" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaGithub size={40} />
              <p className="mt-2">GitHub</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="mailto:Jorgepad002@gmail.com" className="d-block mb-3">
              <FaEnvelope size={40} />
              <p className="mt-2">Correo: Jorgepad002@gmail.com</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="tel:+529532398117" className="d-block mb-3">
              <FaWhatsapp size={40} />
              <p className="mt-2">WhatsApp</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
      </Container>
    </footer>
  );
};

export default Footer;