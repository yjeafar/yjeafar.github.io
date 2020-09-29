import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar';
import '../css/skills.css';
import ScrollableSection from 'react-update-url-on-scroll/lib/ScrollableSection';

export default function Skills({forwardedRef}) {

    var languageValues = {
        Cplusplus: 3, Java: 2, CSharp: 4, Bootstrap: 3,
        SQL: 4, AngularJs: 4, React: 3, Django: 3,
        Python: 3, JavaScript: 5, Typescript: 5, HTML: 5,
        CSS: 4, DomainDrivenDesign: 5, MVC: 4
    };

    var toolValues = {
        VirtualBox: 4, Git: 3, FileZilla: 5,
        SSMS: 5, Docker: 2, CloneZilla: 5, SublimeText: 3,
        VisualStudio: 5, NotepadPlusPlus: 4, SSIS: 4, MSOffice: 5,
    };

    var otherSkillValues = {
        Linux: 4, Apache: 2, Bash: 5, NextCloud: 5,
        PiHole: 5, HomeServer: 3, RSAEncryptions: 4,
    };

    return (
        <div className="randomBackground" id="skills" ref={forwardedRef}>
                <Container className="containerStyle">
                    <Row className="justify-content-md-center">
                        <Col md="5">
                            <h1 className="sectionTitle">Skills</h1>
                            <div className="sectionTitle">Skills from my life </div>
                            <hr className='horizontalLine' />
                        </Col>
                    </Row>
                    <h3 className="headerStyle">
                        Languages & Frameworks
                    </h3>
                    <Row>
                        <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> C++</span>
                                    <Skillset className="skill" value={languageValues.Cplusplus} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Java </span>
                                    <Skillset className="skill" value={languageValues.Java} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> AngularJS</span>
                                    <Skillset className="skill" value={languageValues.AngularJs} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Python</span>
                                    <Skillset className="skill" value={languageValues.Python} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> JavaScript</span>
                                    <Skillset className="skill" value={languageValues.JavaScript} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> HTML</span>
                                    <Skillset className="skill" value={languageValues.HTML} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Bootstrap </span>
                                    <Skillset className="skill" value={languageValues.Bootstrap} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> MVC  </span>
                                    <Skillset className="skill" value={languageValues.MVC} />
                                </li>
                            </ul>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> C# </span>
                                    <Skillset className="skill" value={languageValues.CSharp} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> React </span>
                                    <Skillset className="skill" value={languageValues.React} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Django </span>
                                    <Skillset className="skill" value={languageValues.Django} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Typescript </span>
                                    <Skillset className="skill" value={languageValues.Typescript} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> CSS </span>
                                    <Skillset className="skill" value={languageValues.CSS} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> SQL </span>
                                    <Skillset className="skill" value={languageValues.SQL} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Domain Driven Design </span>
                                    <Skillset className="skill" value={languageValues.DomainDrivenDesign} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <br />
                    <hr className="sectionLine" />
                    <br />
                    <h3 className="headerStyle">
                        Tools
                    </h3>
                    <Row>
                        <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle" > Git </span>
                                    <Skillset className="skill" value={toolValues.Git} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> CloneZilla </span>
                                    <Skillset className="skill" value={toolValues.CloneZilla} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> SSIS </span>
                                    <Skillset className="skill" value={toolValues.SSIS} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> MS Office </span>
                                    <Skillset className="skill" value={toolValues.MSOffice} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Sublime Text </span>
                                    <Skillset className="skill" value={toolValues.SublimeText} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Virtual Box </span>
                                    <Skillset className="skill" value={toolValues.VirtualBox} />
                                </li>
                            </ul>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> Docker </span>
                                    <Skillset className="skill" value={toolValues.Docker} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> FileZilla </span>
                                    <Skillset className="skill" value={toolValues.FileZilla} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> SSMS </span>
                                    <Skillset className="skill" value={toolValues.SSMS} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Notepad++ </span>
                                    <Skillset className="skill" value={toolValues.NotepadPlusPlus} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Visual Studio </span>
                                    <Skillset className="skill" value={toolValues.VisualStudio} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <br />
                    <hr className="sectionLine" />
                    <br />
                    <h3 className="headerStyle">
                        Other Skills
                    </h3>
                    <Row className="row">
                        <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> Linux </span>
                                    <Skillset className="skill" value={otherSkillValues.Linux} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Apache </span>
                                    <Skillset className="skill" value={otherSkillValues.Apache} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> PiHole </span>
                                    <Skillset className="skill" value={otherSkillValues.PiHole} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> NextCloud </span>
                                    <Skillset className="skill" value={otherSkillValues.NextCloud} />
                                </li>
                            </ul>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> Bash </span>
                                    <Skillset className="skill" value={otherSkillValues.Bash} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Home Server </span>
                                    <Skillset className="skill" value={otherSkillValues.HomeServer} />
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> RSA Encryptions </span>
                                    <Skillset className="skill" value={otherSkillValues.RSAEncryptions} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}