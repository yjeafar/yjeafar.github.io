import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import SiteFooter from './site-footer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { grumpyCat, properCat, dualCats, catInBox, standingCat } from '../images/not-found-page'
import '../css/not-found.css'

const pictures = [grumpyCat, properCat, dualCats, catInBox, standingCat];

export default function NotFound() {

  return (
    <div className="secondBackground" id="notFound">
      <Container className="containerStyle" id="">
        <img src={ pictures[Math.floor(Math.random() * 5)] }></img>
        <span id="largeFont"> <strong>404</strong> </span>
        <span id="pageNotFound">Page Not Found</span>
        <div id="anchorMessage" ><a href="/">Go to the home page <ArrowRightAltIcon /></a></div>
      </Container>
      <span className="footerPositioning">
        <SiteFooter />
      </span>
    </div>
  );
}
