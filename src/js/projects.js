import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/projects.css'
import coach from '../pictures/coach.jpg'

export default function Projects() {

  return (
    <div className="Projects" id="projects">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="5">
            <h1 className="sectionTitle">Projects</h1>
            <div className="sectionTitle">The projects from my life </div>
            <hr className='horizontalLine' />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <div className="imageSpacing">
            <a href="project1">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
            </a>
          </div>
          <div  className="imageSpacing">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
              </div>
          <div  className="imageSpacing">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
              </div>
        </Row>
        <Row className="justify-content-md-center">
          <div className="imageSpacing">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
          </div>
          <div  className="imageSpacing">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
              </div>
          <div  className="imageSpacing">
            <img height="180" width="250" src={coach}
              alt="Basketball Coach looking at players on court" />
              </div>
        </Row>
      </Container>
    </div>
  );
}
