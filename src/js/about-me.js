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
        <Row className="justify-content-md-center">
          <Col style={{paddingLeft: "15%"}} >
            <h1>Hello! I'm Yasser. </h1>
            <div>
              I'm a Software Engineer that has professional full stack developer experience. Check out my ever-exapnding portfolio page to see some of my work!
            </div>
            <br/>
            <br/>
            <h3>About Me</h3>
          <p>
            I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
            (when I can actually setup my telescope properly), hiking, and Game of Thrones (excluding the last season) 😄
          </p>
          </Col>
          <Col>
            <img src={me} alt="Picture of me" style={{ marginRight:100 }}/>
          </Col>
        </Row>
      </Container>
      <Element id='example-destination' name='example-destination'>
        <Experiences/>
      </Element>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}