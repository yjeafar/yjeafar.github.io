import React from 'react';
import NavBar from './navBar';
import ExternalLinkIcons from './external-link-icons';
import { makeStyles } from '@material-ui/core/styles';
import me from '../images/capture.png';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/about-me.css';
import { Link } from 'react-router-dom';

/* All inline styling was added because element was not working properly when it was in external css page */

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textLength: {
    width: "90%",
    marginLeft: 15
  },
  card: {
    width: "70%",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    backgroundColor: "#e2d9dc"
  },
  submitButton: {
    marginTop: 15,
    float: "right",
    marginRight: "17%",
    marginBottom: 15,
    opacity: 0.75,
    backgroundColor: "#945c74",
    '&:hover': {
      backgroundColor: "#945c74",
      color: '#2b262d',
      opacity: 1
  }
  },
  clearButton: {
    marginTop: 10,
    float: "left",
    marginLeft: 23,
    marginBottom: 20
  },
  alert: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  spinner: {
    marginTop: 10,
    width: "3rem",
    height: "3rem"
  }
}));


export default function AboutMe({ forwardedRef }) {

  const classes = useStyles();

  return (
    <div>
      <div id="headerStyle">
        <Row style={{marginRight:0 }}> 
          <Col id="nameStyle">
            <span>Yasser Jeafar </span>
          </Col>
          <Col id="externalLinks">
            <span style={{float: "right"}}>
              <ExternalLinkIcons />
            </span>
          </Col>
        </Row>
      </div>
      <NavBar />
      <div className="lightBackground" ref={forwardedRef}>
        <Container className="containerStyle, AboutMe">
        <h1 id="appHeader">Online Resume</h1>
          <hr className='horizontalLine' style={{ width: '70%' }} />
          <Row className="justify-content-md-center" >
            <div id="pictureBorder">
              <Col style={{ float: "left", width: "50%", paddingRight: 5 }}> 
                <img src={me} alt="me" width="100%" height="500" />
              </Col>
              <Col style={{ float: "right", width: "50%", backgroundColor: "#e2d9dc", height: "100%" }} > 
                <h1 style={{ color: "#945c74" }}>Hello! I'm Yasser. </h1>
                <div style={{ paddingBottom: 10 }}>
                  I'm a Software Engineer that has professional full stack developer experience. Check out my ever-exapnding projects section below to see some of my work.
                  You could also download <Link to='/files/resume.pdf' target="_blank" download="Yasser_Jeafar_Resume.pdf"> a copy of my resume.</Link> 
              </div>
                <h3 style={{ color: "#945c74" }}
                >About Me</h3>
                <p>
                  I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, and Game of Thrones (excluding the last season) <span role="img" aria-label="Smiling Emoji">😄</span>
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}