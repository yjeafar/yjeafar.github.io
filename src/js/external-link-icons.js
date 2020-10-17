import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function ExternalLinkIcons() {

    // This component was created to show the github, linkedin, and email icons. Added it as a component because it will be expanded upon

    return (
        <div>
                <Row className="d-flex justify-content-center">
                    <a href="https://github.com/yjeafar" className="linkStyle">
                        <Row style={{ marginRight: 10 }}>
                            <Col>
                                <GitHubIcon fontSize="large" style={{ marginRight: 12 }} />
                            </Col>
                        </Row>
                    </a>
                    <a href="https://linkedin.com/in/yjeafar" className="linkStyle">
                        <Row style={{ marginRight: 10 }}>
                            <Col>
                                <LinkedInIcon fontSize="large" style={{ marginRight: 10 }} />
                            </Col>
                        </Row>
                    </a>
                    <a href="mailto: test@email.com" className="linkStyle">
                        <Row>
                            <Col>
                                <AlternateEmailIcon fontSize="large"  />
                            </Col>
                        </Row>
                    </a>
                </Row>
        </div>
    );
}