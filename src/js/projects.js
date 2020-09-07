// import React from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
// import '../css/projects.css'
// import coach from '../pictures/coach.jpg'

// export default function Projects() {

//   return (
//     <div className="Projects" id="projects">
//       <Container>
//         <Row className="justify-content-md-center">
//           <Col md="5">
//             <h1 className="sectionTitle">Projects</h1>
//             <div className="sectionTitle">The projects from my life </div>
//             <hr className='horizontalLine' />
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row className="justify-content-md-center">
//           <div className="imageSpacing">
//             <a href="project1">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//             </a>
//           </div>
//           <div  className="imageSpacing">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//               </div>
//           <div  className="imageSpacing">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//               </div>
//         </Row>
//         <Row className="justify-content-md-center">
//           <div className="imageSpacing">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//           </div>
//           <div  className="imageSpacing">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//               </div>
//           <div  className="imageSpacing">
//             <img height="180" width="250" src={coach}
//               alt="Basketball Coach looking at players on court" />
//               </div>
//         </Row>
//       </Container>
//     </div>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/projects.css';
import coach from '../pictures/coach.jpg';
import pc from '../pictures/pc.jpg';
import urlShortener from  '../pictures/urlshortener.jpg'; 

const images = [
  {
    url: coach,
    title: 'Coaching Skill with Age',
    width: '30%',
  },
  {
    url: pc,
    title: 'Home Server',
    width: '30%',
  },
  {
    url: urlShortener,
    title: 'URL Shortener',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    paddingLeft: "7%",
  },
  image: {
    position: 'relative',
    height: 200,
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

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
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
      <span>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/basketball-coach?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  );
}
