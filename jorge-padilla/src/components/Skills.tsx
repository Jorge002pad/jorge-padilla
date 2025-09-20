import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const skills = {
  languages: [
    'C', 'C++', 'Java', 'Python', 'PHP', 'Javascript', 'SQL', 'NoSQL'
  ],
  frameworks: [
    'Laravel', 'Angular', 'React', 'NodeJs'
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="skills-section py-5" ref={ref}>
      <Container>
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row className="justify-content-center">
          <Col lg={10} className="mb-5">
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card>
                <Card.Body>
                  <h4 className="text-center"><FaCode className="me-2" /> Lenguajes</h4>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    {skills.languages.map((skill, index) => (
                      <li key={index} className="m-2">
                        <span className="badge">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={6} className="mb-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card>
                <Card.Body>
                  <h4 className="text-center"><FaLaptopCode className="me-2" /> Frameworks</h4>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    {skills.frameworks.map((skill, index) => (
                      <li key={index} className="m-2">
                        <span className="badge">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;