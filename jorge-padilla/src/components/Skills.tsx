import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import '../styles/Skills.css';

const skills = {
  languages: [
    'C', 'C++', 'Java', 'Python', 'PHP', 'Javascript', 'SQL', 'NoSQL'
  ],
  frameworks: [
    'Laravel', 'Angular', 'React', 'NodeJs'
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
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
          </Col>
          <Col md={6} className="mb-4">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;