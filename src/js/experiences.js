import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../css/experiences.css';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

  
const useStyles = makeStyles((theme) => ({
  datePosition: {
    float: 'right'
  },
  accentColor: {
    color: "#945c74"
  }
}));


export default function Experiences({ forwardedRef }) {

  const classes = useStyles();

  return (
    <div className="secondBackground" id="experiences" ref={forwardedRef} >
      <Container className="containerStyle">
        <Row className="justify-content-md-center">
          <Col md="12">
            <h1 className="sectionTitle">Experiences</h1>
            <div className="sectionSubTitle">"The only real mistake is the one from which we learn nothing." ― Henry Ford  </div>
            <hr className="horizontalLine" />
          </Col>
        </Row>
        <br />
        <div className="sectionSpacing">
          <h2 className={ classes.accentColor }>
            Education
        </h2>
          <Row className='companyName' >
            <Col xs={6} md={6} >
              <span >
                University of Michigan - Dearborn
              </span>
            </Col>
            <Col xs={6} md={6} className={ classes.datePosition } >
              <span>
                September 2016 - December 2019
            </span>
            </Col>
          </Row>
          <Box m={1} className="boxBorder" >
            <Row className='positionName'>
              <Col xs={12} md={12}>
                Bachelor of Science in Software Engineering
            </Col>
            </Row>
            <div className="experienceContainer" >
              I started school knowing I would do engineering but not knowing what exactly. Coming from a Middle Eastern background and with my
              parents being first generation immigrants without a whole lot of knowledge about computers, I didn't consider Software Engineering
              at first. After some time, I took a CIS class, and knew this was what I wanted to do for the rest of my life. I joined the Insitute
              of Software Engineers and volunteered to help at Hackathons and taught kids in low privillage areas to code through Google Code Corps.
              I graduated with a 3.80 GPA and was on the dean's list for multiple consecutive semesters.
            </div>
          </Box>
          <hr className='horizontalLine' style={{ marginBottom: 25, marginTop: 50 }} />
          <br />
        </div>
        <div>
          <h2 className={ classes.accentColor }>
            Work Experience
        </h2>
          <div className="sectionSpacing">
            <Row className='companyName'>
              <Col xs={6} md={6}>
                Blue Cross Blue Shield of Michigan
            </Col>
              <Col xs={6} md={6}>
                <span className={ classes.datePosition }>
                  May 2019 - August 2019, January 2020 - Current
              </span>
              </Col>
            </Row>
            <Box m={1} className="boxBorder">
              <div className="experienceContainer">
                <Row className='positionName'>
                  <Col xs={12} md={6}>
                    Business Application Developer
              </Col>
                </Row>
                <div className="bulletStyle">
                  <ul>
                    <li>
                      Blue Cross Blue Shield of Michigan is the largest health insurance provider in Michigan
                  </li>
                    <li>
                      I started at Blue Cross after getting offered an internship while I was still in school. At the time, they had me work on pages that would generate
                      reports, used to help underwriters complete settlements quicker
                  </li>
                    <li>
                      I completed this assignment (created 5 reports users can select from) using Angular 7.0 and C# 4.3, with Entity Framework to help with backend SQL statements
                    <ul>
                        <li>
                          I designed, implemented, and tested both the front and back end using a Domain Driven Design architecture
                  </li>
                        <li>
                          This assignmnet helped the team retire applications 10+ years old that were run in the command line
                  </li>
                      </ul>
                    </li>
                    <li>
                      I was offered a full time position to start in January of 2020
                  </li>
                    <li>
                      Since starting, I have made many changes to different applications via ehancements and new features
                    <ul>
                        <li> Updates included: accelerating processing times, requirement gathering, updating current applications, etc.</li>
                        <li>
                          Some new features I added were: a new comment section in our application, new pages to display, update, and/or delete customer information,
                          and more
                      </li>
                      </ul>
                    </li>
                    <li>
                      Created SSIS packages to automate input of data files into the database, and created new SharePoint Online sites
                  </li>
                  </ul>
                </div>
              </div>
            </Box>
          </div>
          <div className="experienceSpacing">
            <Row className='companyName'>
              <Col xs={6} md={5}>
                DTE Energy
              </Col>
              <Col xs={6} md={7}>
                <span className={ classes.datePosition }>
                  February 2019 - May 2019, August 2019 - December 2019
              </span>
              </Col>
            </Row>
            <Box m={1} className="boxBorder">
              <div className="experienceContainer">
                <Row className='positionName'>
                  <Col xs={12} md={6}>
                    Business Application Intern
                  </Col>
                </Row>
                <div className="bulletStyle">
                  <ul>
                    <li>
                      DTE Energy is a public utility company that provides gas and electricity to over 2 million Michiganders.
                  </li>
                    <li>
                      When I started at DTE, they recently switched billing systems, so there were many lights and traffic signals
                      unaccounted for in the new system
                  </li>
                    <li>
                      My main objective was to work on the traffic signals as there had been excel files with 2 million+ records in them with
                      wodden poles and their coordinates
                  </li>
                    <li>
                      With another intern, we worked with Python using Anaconda to clean up the data, then exported the file to SQL and I ran
                      queries to cross reference the coordinates of the pole with what was currently in our system
                    <ul>
                        <li>
                          I ended up finding about $70,000 in annual revenue that we weren't billing for. We had teams go out and check
                          and they located some of the lights/signals that were not in the system
                      </li>
                      </ul>
                    </li>
                    <li>
                      DTE offered me my spot back after my internship at BCBSM, and I accepted
                    <ul>
                        <li>
                          I found about $50,000 in annual revenue from street lights by working with SQL and doing a similar process to what I did with the traffic signals
                      </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
          </div>
          <div className="experienceSpacing">
            <Row className='companyName'>
              <Col xs={6} md={7}>
                Epitec
            </Col>
              <Col xs={6} md={5}>
                <span className={ classes.datePosition }>
                  June 2018 – August 2018
              </span>
              </Col>
            </Row>
            <Box m={1} className="boxBorder">
              <div className="experienceContainer">
                <Row className='positionName'>
                  <Col xs={12} md={6}>
                    Software Engineering Intern
            </Col>
                </Row>
                <div className="bulletStyle">
                  <ul>
                    <li>
                      Epitec is a staffing/recruiting company that helps match employees with companies.
                  </li>
                  <li>
                      The stack we used was Angular 6, C# SQL, and Entity Framework
                </li>
                    <li>
                      I added charts, tables, filtered data, and made many chagnes to the scrum based development website
                 </li>
                    <li>
                      After learning a bit about full stack, I was moved onto production changes
                  </li>
                    <li>
                      When starting, I was tasked with helping create a website for employees, which would help streamline the hiring process
                  </li>
                    <li>
                      The application would automatically generate a contract with the correct user and recruiter information, and was downloaded as a pdf
                 </li>
                    <li>
                      I worked on parts that helped show the recruiter important information about the client, as well as work creating APIs for other
                      members of my team
                  </li>
                    <li>
                      We did weekly/biweekly code reviews and showcased the changes we made during the Sprint meetings. We used Scrum to keep track of our progress
                  </li>
                  </ul>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <br />
      </Container>
    </div>
  );
}