import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../images/meTwo.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/about-me.css';

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
          <hr className='horizontalLine' style={{ width: '80%' }} />
          <Row className="justify-content-md-center" >
            <div id="pictureBorder">
              <Col className= { classes.imageStyle }> 
                <img id="imageMinWidth" src={me} alt="me" width="100%" height="750" />
              </Col>
              <Col className={classes.descriptionStyle} id="aboutMeMinWidth" > 
                <h1 className={ classes.accentColor }>Hello! I'm Yasser. </h1>
                <div style={{ paddingBottom: 10 }}>
                  I'm a Software Engineer with experience as a professional Full Stack developer. Check out my ever-expanding projects section below to see some of my work, and 
                  if you have any questions, please feel free to reach out to me!
              </div>
                <h3 className={ classes.accentColor }>About Me</h3>
                <p>
                <p>
                  I became a software engineer after going to college unsure of what to do. I kind of had a feeling I was going to do engineering, however I knew that I didn't
                  want to do mechanical or electrical. I never really know what coding was until I was introduced to it from a friend of mine. After taking my first Computer 
                  Science class my freshman year, I knew right away that this was someting I wanted to do for the rest of my life (until I retire on a farm of course). 
                </p>
                  I love acquiring new skills, and I am a huge user of FOSS. In my spare time, I enjoy fishing, amateur star gazing
                (when I can actually setup my telescope properly), hiking, playing video games, traveling as much as I can, and setting up aquariums 
                <span role="img" aria-label="Smiling Emoji">😄</span>
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}