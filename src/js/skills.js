import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar';
import '../css/skills.css';


export default function Skills() {

    var skillValues = {
        Cplusplus: 3, Java: 2, VirtualBox: 3,
        Git: 2, CSharp: 4, Bootstrap: 3, SQL: 4, AngularJs: 4,
        React: 3, Django: 3, Python: 3, Linux: 4, FileZilla: 5,
        Apache: 2, JavaScript: 5, Typescript: 5, SSMS: 5,
        Docker: 2, CloneZilla: 5, SublimeText: 3, VisualStudio: 5,
        NotepadPlusPlus: 4, SSIS: 4, Bash: 5, MSOffice: 5,
        NextCloud: 5, PiHole: 5, HomeServer: 3, RSAEncryptions: 4,
        HTML: 5, CSS: 4, DomainDrivenDesign: 5,
    };

    return (
        <div className="Skills" id="skills">
            <div className="randomBackground">
            <Container fluid="md" className="containerStyle">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="5">
                            <h1 className="sectionTitle">Skills</h1>
                            <div className="sectionTitle">Skills from my life </div>
                            <hr className='horizontalLine' />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h3 className="headerStyle">
                        Languages & Frameworks
                    </h3>
                    {/* <Row className="alignSkills">
                        <Col md={5}>
                            <Row>
                                <Col>
                                    C++
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Cplusplus} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    C#
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.CSharp} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    HTML
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.HTML} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    CSS
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.CSS} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    React
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.React} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    SQL
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.SQL} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    Bootstrap
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Bootstrap} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col >
                                    Java
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Java} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    Python
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.Python} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    Django
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Django} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    Angular
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.AngularJs} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    JavaScript
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.JavaScript} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    TypeScript
                                    </Col>
                                <Col>
                                    <Skillset value={skillValues.Typescript} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    Domain Driven Design
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.DomainDrivenDesign} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <hr className="sectionLine"/>
                    <h3 className="headerStyle">
                                Tools
                    </h3>
                    <Row className="alignSkills">
                        <Col md={5}>
                            <Row>
                                <Col >
                                    SSMS
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.SSMS} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Git
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Git} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Docker
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.Docker} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    FileZilla
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.FileZilla} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    CloneZilla
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.CloneZilla} />
                                </Col>
                            </Row>
                            </Col>
                            <Col md={7}>
                                <Row>
                                    <Col>
                                        MS Office
                                    </Col>
                                    <Col>
                                        <Skillset value={skillValues.MSOffice} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Sublime Text
                                    </Col>
                                    <Col>
                                        <Skillset value={skillValues.SublimeText} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Visual Studio
                                </Col>
                                    <Col>
                                        <Skillset value={skillValues.VisualStudio} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Notepad++
                                    </Col>
                                    <Col>
                                        <Skillset value={skillValues.NotepadPlusPlus} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        SSIS
                                    </Col>
                                    <Col>
                                        <Skillset value={skillValues.SSIS} />
                                    </Col>
                                </Row>
                            </Col>
                    </Row>
                    <br/>
                    <hr className="sectionLine"/>

                    <h3 className="headerStyle">
                                Other Skills
                     </h3>
                    <Row className="alignSkills">
                        <Col md={5}>
                            <Row>
                                <Col >
                                    Apache
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Apache} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    NextCloud
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.NextCloud} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    PiHole
                            </Col>
                                <Col>
                                    <Skillset value={skillValues.PiHole} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col  >
                                    Home Server Setup
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.HomeServer} />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    RSA Encryptions
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.RSAEncryptions} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Bash
                                </Col>
                                <Col>
                                    <Skillset value={skillValues.Bash} />
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col xs={12} sm={12} md={6} style={{width: "50%"}}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> C++</span>
                                    <span className="skill"> <Skillset value={skillValues.Cplusplus} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> C#</span>
                                    <span className="skill"> <Skillset value={skillValues.CSharp} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Python</span>
                                    <span className="skill"> <Skillset value={skillValues.Python} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> JavaScript</span>
                                    <span className="skill"> <Skillset value={skillValues.JavaScript} /></span>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm ={0} md={6} style={{width: "50%"}}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> AngularJS</span>
                                    <span className="skill"> <Skillset value={skillValues.AngularJs} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> React </span>
                                    <span className="skill"> <Skillset value={skillValues.React} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Django </span>
                                    <span className="skill"> <Skillset value={skillValues.Django} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> SQL </span>
                                    <span className="skill"> <Skillset value={skillValues.SQL} /></span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <br/>
                    <hr className="sectionLine"/>
                </Container>
                <br />
            </Container>
            </div>
        </div>
    );
}