import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function Projects() {
  
    return (
      <div className="Projects">
         <Container>
        <Row className="justify-content-md-center">
          <Col md="5">
            <h1 className="sectionTitle">Projects</h1>
            <div className="sectionTitle">The projects from my life </div>
            <hr className='horizontalLine' />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
