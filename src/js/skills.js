import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar'


export default function Skills() {

    var skillValues = {
        Cplusplus: 3, Java: 2, VirtualBox: 3,
        Git: 2, CSharp: 4, Bootstrap: 3, SQL: 4, AngularJs: 4,
        React: 2, Django: 3, Python: 3, Linux: 4
    };

    return (
        <div className="Skills" id="skills">
            <div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="5">
                                <h1 className="sectionTitle">Skills and Interests</h1>
                                <div className="sectionTitle">Skills: Things I have learned <br/>  Interests: Things I do in my free time </div>
                                <hr className='horizontalLine' />
                            </Col>
                        </Row>
                    </Container>
                    <h2>
                        Skills
                    </h2>
                    <h4>
                        Languages and Frameworks
                    </h4>
                    <h4>
                        Tools
                    </h4>
                    <h4>
                        Other Skills
                    </h4>
                    <h2>
                        Interests
                    </h2>
                <br />
                    <Row>
                        <div>
                            <Row>
                                <Col>
                                    C++
                                </Col>
                                    <Skillset value={skillValues.Cplusplus} />
                                <Col>
                                    Java
                                </Col>
                                    <Skillset value={skillValues.Java} />
                            </Row>
                            <Row>
                                <Col>
                                    VirtualBox
                                </Col>
                                    <Skillset value={skillValues.VirtualBox} />
                                <Col>
                                    Git
                                </Col>
                                    <Skillset value={skillValues.Git} />
                            </Row>
                            <Row>
                                <Col>
                                    Bootstrap
                                </Col>
                                    <Skillset value={skillValues.Bootstrap} />
                                <Col>
                                    C#
                                </Col>
                                <Skillset value={skillValues.CSharp} />
                            </Row>
                            <Row>
                                <Col>
                                    SQL
                                </Col>
                                    <Skillset value={skillValues.SQL} />
                                <Col>
                                    AngularJs
                                </Col>
                                    <Skillset value={skillValues.AngularJs} />
                            </Row>
                            <Row>
                                <Col>
                                    React
                                </Col>
                                    <Skillset value={skillValues.React} />
                                <Col>
                                    Django
                                </Col>
                                    <Skillset value={skillValues.Django} />
                            </Row>
                            <Row>
                                <Col>
                                    Python
                                </Col>
                                    <Skillset value={skillValues.Python} />
                                <Col>
                                    Linux (Arch, Ubuntu, Debian)
                                </Col>
                                    <Skillset value={skillValues.Linux} />
                            </Row>
                        </div>
                </Row>
            </div>
        </div>
    );
}