import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Col, Row } from 'react-bootstrap';
import bell from '../pictures/bellGraph.jpg';
import pc from '../pictures/pc.jpg';
import urlShortener from '../pictures/urlshortener.jpg';
import portfolio from '../pictures/portfolio.jpg'
import { Collapse } from '@material-ui/core';
import BasketballCoaches from './projects/basketballCoach';
import HomeServer from './projects/homeServer';
import URLShortener from './projects/urlShortener';
import OnlineResume from './projects/onlineResume';
import '../css/projects.css';

const imagesRow1 = [ //Holds values for first row images
  {
    url: bell,
    title: 'Coaching Skill with Age',
    width: '33%',
    id: 1
  },
  {
    url: pc,
    title: 'Home Server',
    width: '33%',
    id: 2
  },
  {
    url: urlShortener,
    title: 'URL Shortener',
    width: '33%',
    id: 3
  },
];

const imagesRow2 = [ // Holds values for second row imgaes
  {
    url: portfolio,
    title: 'This Website',
    width: '99%',
    id: 4
  },
];

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid #945c74',
      },
    },
  },
  focusVisible: { },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#945c74",
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontWeight: 600
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: "#945c74",
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const projects = [
  { id: 1, project: <BasketballCoaches /> }, // Object to hold speicfic id and comnponent, for project. This is to make sure I only have one 
  { id: 2, project: <HomeServer /> },        // collapse component below, making it dynamic.
  { id: 3, project: <URLShortener /> },
  { id: 4, project: <OnlineResume /> }
];

export default function Projects({ forwardedRef }) {

  const [showProjectRow1, setShowRow1] = useState(false);

  const [showProjectRow2, setShowRow2] = useState(false);

  const [showProjectRow3, setShowRow3] = useState(false);

  const [row1ProjectSelected, setRow1Project] = useState([]);

  const [row2ProjectSelected, setRow2Project] = useState([]);

  const [row3ProjectSelected, setRow3Project] = useState([]);

  const handleSelect = (projectId) => {
    renderProjectComponent(projectId);
  };

  function renderProjectComponent(projectId) {

    let isRow1Shown = false; // Variable used to check if the collapse element in the first row is shown

    let isRow2Shown = false; // Variable used to check if the collapse element in the second row is shown

    let isRow3Shown = false; // Variable used to check if the collapse element in the third row is shown

    let temp = projects.filter(e => e.id === projectId); // Finds the project that the user has selected and gets the id for it (defined in projects object above)

    // Seperated the projects by rows for the two different Collapse elements. If id is between 1-3 it's in row 1, 4-6 is row 2, etc. Will never exceed 3 rows
    if (temp[0].id <= 3) {
      setRow1Project(temp);
    } else if (temp[0].id > 3 && temp[0].id <= 6) {
      setRow2Project(temp);
    } else if (temp[0].id > 6) {
      setRow3Project(temp);
    }

    /* Logic to show/hide the two collapse elements, makes them seem like they are working together. First part checks if its in the first row. The second part checks if the 
       user has clicked the same element as before, if so show/hide it. The condition after the || operator is to check if the project is currently being shown, if false then 
       it'll show the element. Inside of the if, a temp var is set to check if the current row is being shown or now, and then showProject hook is set */

    if (temp[0].id <= 3 && (temp[0] === row1ProjectSelected[0] || !showProjectRow1)) {
      isRow1Shown = !showProjectRow1;
      setShowRow1(isRow1Shown);
    } else if ((temp[0].id > 3 && temp[0].id <= 6) || (!showProjectRow2 && (temp[0].id > 3 && temp[0].id <= 6))) { // Similar logic to above
      isRow2Shown = !showProjectRow2;
      setShowRow2(isRow2Shown);
    } else if ((temp[0].id > 6) || (!showProjectRow3 && temp[0].id > 6)) {
      isRow3Shown = !showProjectRow3;
      setShowRow3(isRow3Shown);
    }

    if (isRow1Shown) { // If the Collapse element in row 1 is shown, then hide the Collapse element in the second row and third row, and vice versa
      setShowRow2(false);
      setShowRow3(false);
    } else if (isRow2Shown) {
      setShowRow1(false);
      setShowRow3(false);
    } else if (isRow3Shown) {
      setShowRow1(false);
      setShowRow2(false);
    }
  }

  const classes = useStyles();

  return (
    <div className="lightBackground" id="projects" ref={forwardedRef}>
      <Container className="Projects" id="containerStyle">
        <Row className="justify-content-md-center">
          <Col md="5">
            <h1 className="sectionTitle">Projects</h1>
            <div className="sectionSubTitle"> The projects from my life </div>
            <hr className='horizontalLine' />
          </Col>
        </Row>
        {imagesRow1.map((image) => (
          <ButtonBase
            focusRipple
            onClick={() => handleSelect(image.id)}
            key={image.title} // Assign id of project to each button, keeps track of which one was clicked 
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}

        <div className="projectSpacing">
          <Collapse in={showProjectRow1 && row1ProjectSelected[0]}>
            {row1ProjectSelected[0]?.project}
          </Collapse>
        </div>

        {imagesRow2.map((image) => (
          <ButtonBase
            focusRipple
            onClick={() => handleSelect(image.id)}
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}

        <div className="projectSpacing">
          <Collapse in={showProjectRow2 && row2ProjectSelected[0]}>
            {row2ProjectSelected[0]?.project}
          </Collapse>
        </div>

        <div className="projectSpacing">
          <Collapse in={showProjectRow3 && row3ProjectSelected[0]}>
            {row3ProjectSelected[0]?.project}
          </Collapse>
        </div>
      </Container>
    </div>
  );
}
