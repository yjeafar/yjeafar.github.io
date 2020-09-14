import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../css/experiences.css';
import { Box } from '@material-ui/core';


export default function Experiences() {



  return (
    <div className="Experiences" id="experiences">
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
        <h2>
          Education
        </h2>
        <Container fluid>
          <Row className='companyName'>
            <Col xs={6} md={8}>
              University of Michigan - Dearborn
            </Col>
            <Col xs={6} md={4} style={{paddingLeft: 30}}>
              September 2016 - December 2019
            </Col>
          </Row>
          <Box m={1} className="boxBorder">
          <Row className='positionName'>
            <Col xs={12} md={12}>
              Bachelor of Science in Software Engineering
            </Col>
          </Row>
          <p>
            I started school knowiong I would do engineering but not knowing what exactly. Coming from a Middle Eastern background and with my
            parents being first generation immigrants without a whole lot of knowledge about computers, I didn't consider Software Engineering
            at first. After some time, I came across the field and was curious. After my first CIS class, I knew this was what I wanted to do for
            the rest of my life. I joined the Insitute of Software Engineers and volunteered to help at Hackathons and taught kids in low
            privillage areas to code through Google Code Corps. I graduated with a 3.80 GPA and was on the dean's list for multiple consecutive 
            semesters. 
          </p>
          </Box>
        </Container>
      <hr className='horizontalLine' style={{marginTop: 50}}/>
      <br />



      <div>
        <h2>
          Work Experience
        </h2>
        <Container fluid className="experienceSpacing"> 
          <Row className='companyName'>
            <Col xs={6} md={6}>
              Blue Cross Blue Shield of Michigan
              </Col>
            <Col xs={6} md= {6} style={{paddingLeft: "8%"}}>
              May 2019 - August 2019, January 2020 - Current
              </Col>
          </Row>
          <Box m={1} className="boxBorder">
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Business Application Developer
              </Col>
          </Row>
            <p>
              <ul>
                <li>
                  Blue Cross Blue Shield of Michigan is an independent licensee of Blue Cross Blue Shield, and the largest health insurance provider in Michigan.
                </li>
                <li>
                  I first started at Blue Cross after getting offered an internship while I was still in school. At the time, they had me work on pages that would generate 
                  reports, which in turn would help the Underwriters complete settlements more quickly. 
                </li>
                <li> 
                  I completed this assignment (created 5 reports users can select from) using Angular 7.0 and C# 4.3, with Entity Framework to help with the SQL statements.
                </li> 
                <li>
                  I did both the front and back end, from helping design the pages, to putting it together in the front end, creating the API's in the backend, and 
                  created Services to retrieve the data from the database and send it to the front end to then show it on the page. We used a Domain Driven Design architecture.
                </li> 
                <li>
                  After this assignment, my director hadn't anticipated me finished all of the reports, so he moved me onto a new application that was being worked on. 
                  This tool was something the entire department looked forward to since it was going to increase their productivity noticeably, since they will be getting 
                  out of the restrictive command line tools that they have been using for 10+ years. 
                </li>
                <li>
                  HR offered me a full time position after I graduated, which I accepted. I have made many changes to different applications via ehancements (
                  quicker processing times, errors users were getting, etc) and new features (comment section on our application, new pages to display/change 
                  information, etc) and have been working with SSIS packages to automate the input of our data files into our database, and working on SharePoint 
                  Online sites to update some of those. Each day is a new challenge and one month is almost guarenteed to be different than the month before!
                </li>
              </ul>
          </p>
          </Box>
        </Container>
        <Container fluid className="experienceSpacing"> 
          <Row className='companyName'>
            <Col xs={6}>
              DTE Energy
              </Col>
            <Col xs={6}>
              February 2019 - May 2019, August 2019 - December 2019
              </Col>
          </Row>
          <Box m={1} className="boxBorder">
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Business Application Intern
              </Col>
          </Row>
          <p>
            <ul>
              <li>
                DTE Energy is a public utility company that provides gas and water to many Michiganders as well as to other states. 
              </li>
              <li>
                When I started interning at DTE, they had recently switched systems and somehow, the data got all messed up, so there were now many lights 
                and traffic signals that they were no longer billing for. My main objective was to work on the traffic signals as there had been excel files
                with 2 million+ records in them from whenever DTE did an audit of all their poles. 
              </li>
              <li>
                With another intern, we worked with Python using Anaconda to clean up the data. Once it was to our liking, I exported the file to SQL and ran 
                queries to cross reference the coordinates of the pole with what was currently in our system. 
              </li>
              <li>
                I ended up finding about $70,000 in annual revenue that we weren't billing for. We had teams go out and check 
                and they located the lights that were not in the system, and I helped try and get them updated. However, before I could finish I went to BCBSM 
                for my internship there.
              </li>
              <li> 
                DTE offered me my spot back after the internship, and I accepted so I could help see this project to the end. When I came
                back, I helped look for more traffic lights andn moved onto street lights. 
              </li> 
              <li>
                DTE offered me my spot back after the internship, and I accepted so I could help see this project to the end. When I cameI found about $50,000 in annual revenue from street lights by working
                with SQL and doing a similar process to what I did with the traffic signals.
              </li>  
            </ul>
          </p>
              </Box>
        </Container>
        <Container fluid className="experienceSpacing">
          <Row className='companyName'>
            <Col xs={6} md={9}>
              Epitec
            </Col>
            <Col xs={6} md={3} >
              June 2018 – August 2018
            </Col>
          </Row>
          <Box m={1} className="boxBorder">
          <Row className='positionName'>
            <Col xs={12} md={6}>
              Software Engineering Intern
            </Col>
          </Row>
          <div>
            <ul>
              <li>
                Epitec is a staffing/recruiting company that helps match employees with companies. This was my first internship working with Web Development and
                I was focusing on creating a website for the employees to help streamline the hiring process. 
              </li>
              <li>
                The application would automatically generate a contract 
                with the correct information, and was downloadable as pdf. Before working on that, I worked with my manager for to help change our team's dev page which 
                mimicked a physical scrum setup, but in a website insead. 
              </li>
              <li>
                I added charts, tables, filtered data, etc and once I learned what I was doing I moved onto production
                changes. We used Angular 6, with C# for the backend, SQL, and Entity Framework to incorpoate direct SQL into our backend. 
              </li>
              <li>
                  I worked on parts that helped show the recruiter important information about the client, as well as work on creating new APIs for other
                  members of my team. One of the employees form out team of 7 was my mentor and he helped me navigate through many things as there
                  was a huge learning curve for me, coming from programming in an academia settings vs programming for a company.
              </li>
              <li>
                  We did weekly/biweekly code reviews and showcased the changes we made during the Sprint meetings. We used Scrum to keep track of our progress. 
              </li>
            </ul>
          </div>
            </Box>
        </Container>
      </div>

      <br />

    </div>
  );
}