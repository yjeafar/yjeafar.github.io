import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../css/experiences.css';


export default function Experiences() {



  return (
    <div className="Experiences">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="5">
            <h1 className="sectionTitle">Experiences</h1>
            <div className="sectionTitle">The experiences from my life </div>
            <hr className="horizontalLine"/>
          </Col>
        </Row>
      </Container>
      <br /> 
       <div>
        <h2>
          Education
        </h2>
        <Container fluid>
          <Row className='companyName'>
            <Col xs={6}>
              University of Michigan - Dearborn
            </Col>
            <Col xs={6}>
              December 2019
            </Col>
          </Row>
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Bachelor of Science in Software Engineering
              </Col>
            <Col xs={6} md={4}>
              Dearborn, MI
              </Col>
          </Row>
          <div>
            Graduated with High Distinction; 3.80 GPA; Part of Institute of Software Engineers;
          </div>
        </Container>
      </div>
      <hr className='horizontalLine' />
      <br />



      <div>
        <h2>
          Work Experience
        </h2>
        <Container fluid>
          <Row className='companyName'>
            <Col xs={6}>
              Blue Cross Blue Shield of Michigan
              </Col>
            <Col xs={6}>
              May 2019 - August 2019, January 2020 - Current
              </Col>
          </Row>
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Business Application Developer
              </Col>
            <Col xs={6} md={2}>
              Detroit, MI
              </Col>
          </Row>
          <ul>
            <li>
              Worked in Angular and C# to create/update/maintain multiple websites for the Underwriting team
            </li>
            <li>
              Websites worked on replaced 15+ year old software and increased productivity by up to 50%
              <ul>
                <li>
                  Old applications were being used in command prompt and didn’t allow for edits
                </li>
              </ul>
            </li>
            <li>
              Worked to validate data given to us, solve issues users had, and create new websites/data tables
            </li>
          </ul>
        </Container>
        <Container fluid>
          <Row className='companyName'>
            <Col xs={6}>
              DTE Energy
              </Col>
            <Col xs={6}>
              February 2019 - May 2019, August 2019 - December 2019
              </Col>
          </Row>
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Business Application Intern
              </Col>
            <Col xs={6} md={2}>
              Belleville, MI
              </Col>
          </Row>
          <ul>
            <li>
              Worked in SQL to find missing revenue, optimized searches for tables with 2 million+ rows
              <ul>
                <li>
                  Revenue included unbilled traffic signals, street lights, outdoor protective lights, etc
                </li>
              </ul>
            </li>
            <li>
              Added about $70,000 in annual revenue that DTE was not billing for from before
            </li>
          </ul>
        </Container>
        <Container fluid>
          <Row className='companyName'>
            <Col xs={6}>
              Epitec
            </Col>
            <Col xs={6}>
              June 2018 – August 2018
            </Col>
          </Row>
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Software Engineering Intern
            </Col>
            <Col xs={6} md={4}>
              Southfield, MI
            </Col>
          </Row>
          <ul>
            <li>
              Worked in Angular, C#, and SQL to update existing web applications and add features to speed up staffing process
            </li>
            <li>
              Used Scrum to keep track of assignment progress and organize assignments
            </li>
          </ul>
        </Container>
      </div>

      <br />

    </div>
  );
}