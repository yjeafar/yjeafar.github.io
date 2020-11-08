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
  imageStyle: {
    float: "left", 
    width: "50%", 
    paddingRight: 5
  },
  descriptionStyle: {
    float: "right", 
    width: "50%", 
    backgroundColor: "#e2d9dc", 
    height: "100%"
  },
  accentColor: {
    color: "#945c74"
  }
}));


export default function AboutMe({ forwardedRef }) {

  const classes = useStyles();

  return (
    <div ref={forwardedRef}>
      <div id="headerStyle">
        <Row style={{marginRight:0 /* Row margin adds horizontal scroll bar, this makes sure it doesn't appear */}}> 
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
      <div className="lightBackground" >
        <Container className="containerStyle, AboutMe">
        <h1 id="appHeader">Online Resume</h1>
          <hr className='horizontalLine' style={{ width: '70%' }} />
          <Row className="justify-content-md-center" >
            <div id="pictureBorder">
              <Col className= { classes.imageStyle }> 
                <img id="imageMinWidth" src={me} alt="me" width="100%" height="500" />
              </Col>
              <Col className={classes.descriptionStyle} id="aboutMeMinWidth" > 
                <h1 className={ classes.accentColor }>Hello! I'm Yasser. </h1>
                <div style={{ paddingBottom: 10 }}>
                  I'm a Software Engineer that has professional full stack developer experience. Check out my ever-exapanding projects section below to see some of my work.
                  You could also download <Link to='/files/resume.pdf' target="_blank" download="Yasser_Jeafar_Resume.pdf"> a copy of my resume.</Link> 
              </div>
                <h3 className={ classes.accentColor }
                >About Me</h3>
                <p>
                  I love learning new technologies, Linux, and FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, and Game of Thrones (excluding the last season <span role="img" aria-label="Smiling Emoji">😄</span>)
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}