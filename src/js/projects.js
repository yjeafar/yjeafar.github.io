import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/projects.css';
import bell from '../pictures/bellGraph.jpg';
import pc from '../pictures/pc.jpg';
import urlShortener from  '../pictures/urlshortener.jpg'; 
import me from '../pictures/me.jpg'
import { Collapse } from '@material-ui/core';
import BasketballCoaches from './projects/basketballCoach';
import HomeServer from './projects/homeServer';
import URLShortener from './projects/urlShortener';
import OnlineResume from './projects/onlineResume';
import ScrollableSection from 'react-update-url-on-scroll/lib/ScrollableSection';

const images = [ //Holds values for first row images
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

const images2 = [ // Holds values for second row imgaes
  {
    url: me,
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
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
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
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


const projects = [
  { id: 1, project: <BasketballCoaches/> }, // Object to hold speicfic id and comnponent, for project. This is to make sure I only have one 
  { id: 2, project: <HomeServer/> },        // collapse component below, making it dynamic.
  { id: 3, project: <URLShortener/> },
  { id: 4, project: <OnlineResume/> }
];

function setState(){
  window.history.pushState("", "Projects", "/#projects");
}

export default function Projects() {

  const [selected, setSelected] = React.useState(0); // 0 is not a key in projects object

  const [showProject, setShow] = React.useState(false);

  const [projectSelected, setProject] = React.useState([]);

  const handleSelect = (projectId) => {
    setSelected(projectId);
    renderProjectComponent(projectId);
  };

  function renderProjectComponent(projectId) {

  let temp = projects.filter(e => e.id === projectId) 

  setProject(temp); // State hook sets after method is complete. This causes an error because I need it set right away, workaround is a temp var
    console.log(selected, projectId);
    if (temp[0]) { // There is a value in array, meaning image was clicked
        if (selected === projectId || (!showProject && selected !== projectId) || (selected === 0))  // If the old id is the same as current id, show/hide element. 
         {                                                                                           // If not, keep showing element. If old value is not the same as the
          setShow((prev => !prev));                                                                  // current value and it is not shown, then show it. Captures all clicks
        }
      }
  }

  const classes = useStyles();



  return (
    <ScrollableSection name={'#projects'} affecthistory="true">
    <div className="lightBackground" id="projects">
      <Container  className="Projects"id="containerStyle">
         <Row className="justify-content-md-center">
           <Col md="5">
             <h1 className="sectionTitle">Projects</h1>
             <div className="sectionTitle">The projects from my life </div>
             <hr className='horizontalLine' />
           </Col>
         </Row>
      {images.map((image) => (
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
              // onClick={(e) => e.target.style="opacity: 1" }
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      
      <div className="projectSpacing">
          <Collapse in = {showProject && projectSelected[0].id <= 3}> 
            { projectSelected[0]?.project } 
          </Collapse>
      </div>


      {images2.map((image) => (
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
          <Collapse in = {showProject && projectSelected[0].id >= 4}> 
            { projectSelected[0]?.project } 
          </Collapse>
      </div>
      </Container>
      </div>
      </ScrollableSection>
  );
}
