import React from 'react';
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
    <div ref={forwardedRef} id="about-me">
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
                  I'm a Software Engineer with experience as a professional Full Stack developer. Check out my ever-expanding projects section below to see some of my work, and 
                  if you have any questions, please feel free to reach out to me!
              </div>
                <h3 className={ classes.accentColor }
                >About Me</h3>
                <p>
                  I love acquiring new skills, and I am a huge user of FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, playing video games, and Game of Thrones (excluding the last season <span role="img" aria-label="Smiling Emoji">😄</span>)
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}