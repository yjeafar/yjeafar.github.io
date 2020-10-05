import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../css/experiences.css';
import { Box } from '@material-ui/core';

export default function Experiences({ forwardedRef }) {
  return (
    <div className="blueBackground" id="experiences" ref={forwardedRef} >
      <Container className="containerStyle">
        <Row className="justify-content-md-center">
          <Col md="5">
            <h1 className="sectionTitle">Experiences</h1>
            <div className="sectionTitle">The experiences from my life </div>
            <hr className="horizontalLine" />
          </Col>
        </Row>
        <br />
        <div className="sectionSpacing">
          <h2>
            Education
        </h2>
          <Row className='companyName' >
            <Col xs={6} md={7} style={{ minWidth: 280 }} >
              <span >
                University of Michigan - Dearborn
              </span>
            </Col>
            <Col xs={6} md={5} style={{ minWidth: 200 }} >
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
            <div className="experienceContainer" style={{ overflow: "hidden" }}>
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
          <h2>
            Work Experience
        </h2>
          <div className="sectionSpacing">
            <Row className='companyName'>
              <Col xs={6} md={6}>
                Blue Cross Blue Shield of Michigan
            </Col>
              <Col xs={6} md={6}>
                <span style={{ float: "right" }}>
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
                      Blue Cross Blue Shield of Michigan is an independent licensee of Blue Cross Blue Shield, and the largest health insurance provider in Michigan.
                  </li>
                    <li>
                      I started at Blue Cross after getting offered an internship while I was still in school. At the time, they had me work on pages that would generate
                      reports, used to help Underwriters complete settlements quicker.
                  </li>
                    <li>
                      I completed this assignment (created 5 reports users can select from) using Angular 7.0 and C# 4.3, with Entity Framework to help with the SQL statements.
                    <ul>
                        <li>
                          I did both the front and back end (design, implelmentation, and testing) using a Domain Driven Design architecture.
                  </li>
                        <li>
                          This assignmnet helped the team start getting off of applications 10+ years old that were run as a command line application.
                  </li>
                      </ul>
                    </li>
                    <li>
                      I was offered a full time position to start In January of 2020
                  </li>
                    <li>
                      Since starting, I have made many changes to different applications via ehancements and new features
                    <ul>
                        <li> Updates included: quicker processing times, errors users were getting, updated current applications etc</li>
                        <li>
                          Some new features I added were: added a comment section on our application, new pages to display/update/delete customer information,
                          and much more
                      </li>
                      </ul>
                    </li>
                    <li>
                      I have also been working with SSIS packages to automate input of data files into the database, and working on creating new SharePoint
                      Online sites
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
                <span style={{ float: "right" }}>
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
                      DTE Energy is a public utility company that provides gas and water to many Michiganders as well as to other states.
                  </li>
                    <li>
                      When first starting at DTE, they recently switched billing systems so there were now many lights and traffic signals
                      that they were not in the new system.
                  </li>
                    <li>
                      My main objective was to work on the traffic signals as there had been excel files with 2 million+ records in them with
                      wodden poles and their coordinates.
                  </li>
                    <li>
                      With another intern, we worked with Python using Anaconda to clean up the data, then exported the file to SQL and I ran
                      queries to cross reference the coordinates of the pole with what was currently in our system.
                    <ul>
                        <li>
                          I ended up finding about $70,000 in annual revenue that we weren't billing for. We had teams go out and check
                          and they located some of the lights that were not in the system
                      </li>
                      </ul>
                    </li>
                    <li>
                      DTE offered me my spot back after my internship at BCBSM, and I accepted so I could help see this project to the end. When I came
                      back, I looked for more traffic lights, then moved onto street lights.
                    <ul>
                        <li>
                          I found about $50,000 in annual revenue from street lights by working with SQL and doing a similar process to what I did with the traffic signals.
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
                <span style={{ float: "right" }}>
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
                      This was my first internship working with Web Development and I was tasked with helping create a website for the employees to
                      help streamline the hiring process
                  </li>
                    <li>
                      The application would automatically generate a contract with the correct information, and was downloadable as pdf
                 </li>
                    <li>
                      I added charts, tables, filtered data, etc and once I learned what I was doing I moved onto production
                      changes. We used Angular 6, with C# for the backend, SQL, and Entity Framework to incorpoate direct SQL into our backend
                 </li>
                    <li>
                      I worked on parts that helped show the recruiter important information about the client, as well as work on creating new APIs for other
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