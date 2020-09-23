import React from 'react';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import NavBar from './navBar';
import ExternalLinkIcons from './external-link-icons';
import SiteFooter from './site-footer';
import me from '../pictures/capture.png';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/about-me.css';
import ScrollableSection from 'react-update-url-on-scroll/lib/ScrollableSection';

export default function AboutMe() {
  return (
    <div>
      <ScrollableSection name={'#'}>
      <NavBar />
      <div className="lightBackground">
        <Container className="containerStyle, AboutMe">
          <Row className="justify-content-md-center">
            <Col style={{ paddingLeft: "15%" }} >
              <h1>Hello! I'm Yasser. </h1>
              <div style={{ paddingBottom: 10 }}>
                I'm a Software Engineer that has professional full stack developer experience. Check out my ever-exapnding portfolio page to see some of my work!
              </div>
              <h3>About Me</h3>
              <p>
                I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, and Game of Thrones (excluding the last season) <span role="img" aria-label="Smiling Emoji">😄</span>
              </p>
            </Col>
            <Col>
              <div id="pictureBorder">
                <img src={me} alt="me" />
                <div style={{ paddingRight: "5%", paddingTop: "10%" }}>
                  <ExternalLinkIcons />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        <Experiences />
      <Projects />
      <Skills />
      <ContactMe />
      <SiteFooter />
      </ScrollableSection>
    </div>
  );
}