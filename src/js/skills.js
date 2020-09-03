import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar'
import '../css/skills.css'


export default function Skills() {

    var skillValues = {
        Cplusplus: 3, Java: 2, VirtualBox: 3,
        Git: 2, CSharp: 4, Bootstrap: 3, SQL: 4, AngularJs: 4,
        React: 2, Django: 3, Python: 3, Linux: 4, FileZilla: 5,
        Apache: 3
    };

    return (
        <div className="Skills" id="skills">
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="5">
                            <h1 className="sectionTitle">Skills and Interests</h1>
                            <div className="sectionTitle">Skills: Things I have learned <br />  Interests: Things I do in my free time </div>
                            <hr className='horizontalLine' />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2>
                        Skills
                    </h2>
                    <Row>
                        <Col>
                    <h3>
                        Languages & Frameworks
                    </h3>
                    <Row>
                        <Col xs={6} md={3}>
                            C++
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Cplusplus} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Java
                            </Col>
                        <Col>
                            <Skillset value={skillValues.Java} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Filezilla
                            </Col>
                        <Col>
                            <Skillset value={skillValues.FileZilla} />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <h3>
                        Tools
                    </h3>
                    <Row>
                        <Col xs={6} md={3}>
                            C++
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Cplusplus} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Java
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Java} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Filezilla
                            </Col>
                        <Col>
                            <Skillset value={skillValues.FileZilla} />
                        </Col>
                    </Row>
                </Col>
                    </Row>






                    <Row>
                        <Col>
                    <h3>
                        Other Skills
                    </h3>
                    <Row>
                        <Col xs={6} md={3}>
                            C++
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Cplusplus} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Java
                            </Col>
                        <Col>
                            <Skillset value={skillValues.Java} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Filezilla
                            </Col>
                        <Col>
                            <Skillset value={skillValues.FileZilla} />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <h3>
                        Interests
                    </h3>
                    <Row>
                        <Col xs={6} md={3}>
                            C++
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Cplusplus} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Java
                        </Col>
                        <Col>
                            <Skillset value={skillValues.Java} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            Filezilla
                            </Col>
                        <Col>
                            <Skillset value={skillValues.FileZilla} />
                        </Col>
                    </Row>
                </Col>
                    </Row>

                    {/* <Container>
                <Row>
                    <div>
                        <Row>
                            <Col>
                                C++
                            </Col>
                            <Skillset value={skillValues.Cplusplus} />
                            <Col >
                                Java
                            </Col>
                            <Skillset value={skillValues.Java} />
                            <Col >
                                FileZilla
                            </Col>
                            <Skillset value={skillValues.FileZilla} />
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
                            <Col>
                                Apache
                            </Col>
                            <Skillset value={skillValues.Apache} />
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
                </Container> */}
                </Container>
                <h2>
                    Interests
                </h2>
                <br />
            </div>
        </div>
    );
}