import React from 'react';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import NavBar from './navBar';
import { Element } from 'react-scroll';
import me from '../pictures/me.jpg';
import { Row, Col, Container } from 'react-bootstrap';

export default function AboutMe() {

  return (
    <div className="AboutMe">
      <NavBar/> 
      <Container style={{paddingTop: "5%"}}>
        <Row>
          <Col style={{paddingLeft: "25%"}}>
            <img src={me} alt="Picture of me"/>
          </Col>
          <Col >
            <h1>Hello! I'm Yasser. </h1>
            <div>
              I work as a software developer that has full stack developer experience. Check out my ever-exapnding portfolio page to see some of my work!
            </div>
            <br/>
          <p>
            I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
            (when I can actually setup my telescope properly), hiking, and Game of Thrones (except the last season)   :smile:

          </p>
          </Col>
        </Row>
      </Container>
      <Element id='example-destination' name='example-destination'>
        <Experiences/>
      </Element>
      {/* <Experiences /> */}
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}