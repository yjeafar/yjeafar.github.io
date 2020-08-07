import React from 'react';
import Button from '@material-ui/core/Button';
import { Row, Container, Col } from 'react-bootstrap';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import '../css/resume.css';



export default function Resume() {

  function downloadPDF(){
      return;
  }

  return (
    <div className="Resume">
      <div>Picture of me
      Yasser Jeafar
        </div>
      <div>
        <hr class='horizontalLine' />
        Personal Profile
      </div>
      <br />
      <div>
        <h2>
          Work Experience
        </h2>
        <hr class='horizontalLine' />
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

      <br/>

      <div>
        <h2>
          Education
        </h2>
        <hr class='horizontalLine' />
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
      <br/>
      <div>
        <h2>
          Skills & Interests
        </h2>
        <ul>
        <li>Skills:</li>
        <br/>
        <Row>
          <div>
            <Row>
              <Col>
                C++
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
                Java;
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            <Row>
              <Col>
                VirtualBox
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
                Git
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            <Row>
              <Col>
                 Bootstrap
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
                C#
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            <Row>
              <Col>
                SQL
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
              AngularJs
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            <Row>
              <Col>
                React
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
                Django
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            <Row>
              <Col>
                Python
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
              <Col>
                Linux (Ubuntu, Arch, Manjaro)
              </Col>
              <Col>
                <FiberManualRecordIcon color="primary"/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordOutlinedIcon/>
                <FiberManualRecordOutlinedIcon/>
              </Col>
            </Row> 
            
          </div>
          </Row>
        <li>Interests: </li>
        </ul>
      </div>
      <div>
      <Button
            id="downloadResume"
            variant="contained"  
            color="primary" 
            onClick="downloadPDF()"
            > Download Resume as PDF </Button>  
      </div>
    </div>
  );
}