import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="home" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">JORGE LUIS PADILLA MARTINEZ</h1>
          [cite_start]<p className="lead text-muted">Estudiante Ingeniería en Computación</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;