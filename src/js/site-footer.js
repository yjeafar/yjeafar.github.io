import React from 'react';
import { Row } from 'react-bootstrap';
import ExternalLinkIcons from './external-link-icons';
import '../css/site-footer.css';
import reactFooter from '../pictures/reactFooter.png';

export default function SiteFooter() {

    return (
        <div>
            <footer id="footerStyle" >
                <ExternalLinkIcons/>
                <br />
                <Row className="d-flex justify-content-center"> Made with React &nbsp; <img src={reactFooter} alt="react"/> </Row>
            </footer>
        </div>
    );
}