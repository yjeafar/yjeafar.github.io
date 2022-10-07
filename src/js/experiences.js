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
          <h2 className={classes.accentColor}>
            Education
          </h2>
          <Row className='companyName' >
            <Col xs={6} md={6} >
              <span >
                University of Michigan - Dearborn
              </span>
            </Col>
            <Col xs={6} md={6} className={classes.datePosition} >
              <span>
                September 2016 - December 2019
              </span>
            </Col>
          </Row>
          <Box m={1} className="boxBorder" >
            <Row className='positionName' style={{ paddingLeft: 24 }}>
              <Col xs={12} md={11}>
                Bachelor of Science in Software Engineering
              </Col>
            </Row>
            <div className="experienceContainer" >
              I started school knowing I would do engineering but not knowing what exactly. Coming from a Middle Eastern background and with my
              parents being first generation immigrants without a whole lot of knowledge about computers, I didn't really consider Software Engineering.
              During my second semester, I took a CIS class and right away knew this was what I wanted to do for the rest of my life. I joined the Institute
              of Software Engineers and volunteered to help at Hackathons. I also was apart of Google Code Corps, where I helped teach kids in low privilege
              areas about coding. I graduated with a 3.80 GPA and was on the dean's list for multiple consecutive semesters.
            </div>
          </Box>
          <hr className='horizontalLine' style={{ marginBottom: 25, marginTop: 50 }} />
          <br />
        </div>
        <div>
          <h2 className={classes.accentColor}>
            Work Experience
          </h2>
          <section className="sectionSpacing">
            <Row className='companyName'>
              <Col xs={6} md={5}>
                CUNA Mutual Group
              </Col>
              <Col xs={6} md={5}>
                <span className={classes.datePosition} style={{ paddingLeft: 80 }}>
                  April 2021 - Current
                </span>
              </Col>
            </Row>
            <Box m={1} className="boxBorder">
              <div className="experienceContainer">
                <Row className='positionName'>
                  <Col xs={12} md={6}>
                    Business Systems Developer
                  </Col>
                </Row>
                <div className="bulletStyle">
                <ul>
                    <li>
                      CUNA Mutual Group is an organization that provides financial services to credit unions, but has started to diversify into the insurance market
                    </li>
                    <li>
                      As a Business System Developer, my tasks varied by sprint. One sprint I could be working on server migrations with Chef, the next I could
                      be working on a production issue, and the next I could be adding new functionality or fixing existing issues in our applications.
                    </li>
                    <li>
                      Our main application helped so finance could generate ledgers that were used in reporting to the company and agencies. The process intook 
                      data from the different agencies we work with and transformed the data, put it into our database, and allowed for finance and other business 
                      sectors of our company to use it. 
                      <ul>
                        <li>
                          The application took the JSON file and based on configurations specified in the YAML file, it would put the corresponding column in the 
                          targeted column in the database. 
                        </li>
                        <li>
                          This application was written in Angular, currently using version 14, .Net Core 3.1, and Sql Server (2016). Github with the repos 
                          hosted in Azure DevOps is used for the source control
                        </li>
                      </ul>
                    </li>
                    <li>
                        Some other things I have created include new tables, adding foriegn and unique key indexes to the tables, created many different stored procedures, 
                        new async processes to run alongside other processes we currently have, implement a waitRetry method for the async processes, and much more
                    </li>
                    <li>
                      During my time here, I have really felt myself grow from a junior to a more mid level role, as I found myself becoming the one people come to 
                      for help. The learning experiences here have been nothing short of incredible
                      </li>
                </ul>
                </div>
              </div>
            </Box>
          </section>
          <section className="sectionSpacing">
            <Row className='companyName'>
              <Col xs={6} md={5}>
                Blue Cross Blue Shield of Michigan
              </Col>
              <Col xs={6} md={7}>
                <span className={classes.datePosition}>
                  May 2019 - August 2019, January 2020 - April 2021
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
                      I completed this assignment (created 5 reports users can select from) using Angular 7.0 and C# .Net 4.3, with Entity Framework for backend SQL statements
                      <ul>
                        <li>
                          I designed, implemented, and tested both the front and back end using a Domain Driven Design architecture
                        </li>
                        <li>
                          This project was part of a larger initiative to retire 10+ years old applications that were run in the command line
                        </li>
                      </ul>
                    </li>
                    <li>
                      I was offered a full time position to start in January of 2020
                    </li>
                    <li>
                      During my time, I made many changes to different applications via enhancements and new features
                      <ul>
                        <li> Updates included: accelerating processing times, requirement gathering, updating current applications, etc.</li>
                        <li>
                          Some new features I added were: a new comment section in our application, new pages to display, update and/or delete customer information,
                          created many new SQL tables, integrated new tables into our application, and much more
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
          </section>
          <section className="experienceSpacing">
            <Row className='companyName'>
              <Col xs={6} md={5}>
                DTE Energy
              </Col>
              <Col xs={6} md={7}>
                <span className={classes.datePosition}>
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
                      My main objective was to work on finding traffic signals, as there had been excel files with 2 million+ records in them with
                      wooden poles and their coordinates
                    </li>
                    <li>
                      With another intern, we worked with Python using Anaconda to clean up the data, then exported the file to SQL and I ran
                      queries to cross reference the coordinates of the pole with what was currently in our system
                      <ul>
                        <li>
                          I ended up finding about $70,000 in annual revenue that DTE wasn't billing for. We had teams go out and check
                          and they verified the lights/signals in the field that were not in the system
                        </li>
                      </ul>
                    </li>
                    <li>
                      DTE offered to extend my internship after I completed my internship at BCBSM, and I accepted
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
          </section>
        </div>
        <br/>
      </Container>
    </div>
  );
}