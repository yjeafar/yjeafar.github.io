import React from 'react';
import NavBar from './navBar';
import ExternalLinkIcons from './external-link-icons';
import me from '../pictures/capture.png';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/about-me.css';

export default function AboutMe({ forwardedRef }) {
  return (
    <div >
      <NavBar />
      <div className="lightBackground" ref={forwardedRef}>
        <Container className="containerStyle, AboutMe">
          <h1 id="appHeader">Yasser Jeafar </h1>
          <h2 className="sectionTitle">Online Resume</h2>
          <hr className='horizontalLine' style={{ width: '70%' }} />
          <Row className="justify-content-md-center" >
            <div id="pictureBorder">
              <Col style={{ float:"left", width:"50%", backgroundColor:"#4B3F4B",  height:"100%"}} >
                <h1>Hello! I'm Yasser. </h1>
                <div style={{ paddingBottom: 10 }}>
                  I'm a Software Engineer that has professional full stack developer experience. Check out my ever-exapnding projects section below to see some of my work!
              </div>
                <h3>About Me</h3>
                <p>
                  I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, and Game of Thrones (excluding the last season) <span role="img" aria-label="Smiling Emoji">😄</span>
                </p>
              </Col>
              <Col style={{float: "right", width:"50%", paddingLeft: 0}}>
                <img src={me} alt="me" width="100%" height="500" />
              </Col>
            </div>
            <div  className="justify-content-md-center" style={{ paddingTop: "1%" }}>
                  <ExternalLinkIcons />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}