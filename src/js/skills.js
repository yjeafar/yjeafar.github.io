import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar';
import '../css/skills.css';


export default function Skills() {

    var skillValues = {
        Cplusplus: 3, Java: 2, VirtualBox: 3,
        Git: 2, CSharp: 4, Bootstrap: 3, SQL: 4, AngularJs: 4,
        React: 3, Django: 3, Python: 3, Linux: 4, FileZilla: 5,
        Apache: 3, JavaScript: 5, Typescript: 5, SSMS: 5, Git: 4,
        Docker: 2, CloneZilla: 5, SublimeText: 3, VisualStudio: 5,
        NotepadPlusPlus: 4, SSIS: 4, Bash: 5, MSOffice: 5,
        NextCloud: 5, PiHole: 5, HomeServer: 3, RSAEncryptions: 4
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
                            <h3 className="headerStyle">
                                Languages & Frameworks
                    </h3>
                            <Row>
                                <Col xs={6} md={4}>
                                    C++
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Cplusplus} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    C#
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.CSharp} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Java
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.Java} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Python
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Python} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    JavaScript
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.JavaScript} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    TypeScript
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Typescript} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    SQL
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.SQL} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Django
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Django} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    AngularJs
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.AngularJs} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    React
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.React} />
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <h3 className="headerStyle">
                                Tools
                    </h3>
                            <Row>
                                <Col xs={6} md={4}>
                                    SSMS
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.SSMS} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Git
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Git} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Docker
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.Docker} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    FileZilla
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.FileZilla} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    CloneZilla
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.CloneZilla} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    MS Office
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.MSOffice} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Sublime Text
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.SublimeText} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Visual Studio
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.VisualStudio} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Notepad++
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.NotepadPlusPlus} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    SSIS
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.SSIS} />
                                </Col>
                            </Row>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="headerStyle">
                                Other Skills
                    </h3>
                            <Row>
                                <Col xs={6} md={4}>
                                    Apache
                        </Col>
                                <Col>
                                    <Skillset value={skillValues.Apache} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    NextCloud
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.NextCloud} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    PiHole
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.PiHole} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Home Server Setup
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.HomeServer} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    RSA Encryptions
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.RSAEncryptions} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    Bash
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.Bash} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        </div>
    );
}