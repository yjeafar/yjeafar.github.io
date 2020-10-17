import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import SiteFooter from './site-footer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { grumpyCat, properCat, dualCats, catInBox, standingCat } from '../images/not-found-page'
import '../css/not-found.css'

// This array has the multiple pictures that chosen at random to be shown in the 404 error page
const pictures = [grumpyCat, properCat, dualCats, catInBox, standingCat];

export default function NotFound() {
  return (
    <div className="secondBackground" id="notFound">
      <Container className="containerStyle">
        <Row>
          <Col style={{ float: "left" }}>
            {/* Images in array are sized differently which makes page look weird. Working on resizing them to be similar in height and width, commented out for now */  }
            {/* <img src={pictures[Math.floor(Math.random() * 5)]} alt="cat" ></img> */} 
            <img src={pictures[3]} alt="cat" width="100%" height="100%" ></img>
          </Col>
          <Col style={{ float: "right" }} >
            <div id="errorMessage">
              <span id="largeFont"> <strong>404</strong> </span>
              <span id="pageNotFound">Page Not Found</span>
              <div id="anchorMessage" ><a href="/#">Go to the home page <ArrowRightAltIcon /></a></div>
            </div>
          </Col>
        </Row>
      </Container>
      <span className="footerPositioning">
        <SiteFooter />
      </span>
    </div>
  );
}