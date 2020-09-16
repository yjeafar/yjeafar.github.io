import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar';
import '../css/skills.css';


export default function Skills() {

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
        <div className="Skills" id="skills">
            <div className="randomBackground">
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
                    <div className="row">
                        <div className="col-md-6" style={{ minWidth: 300 /* Starts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> C++</span>
                                    <span className="skill"> <Skillset value={languageValues.Cplusplus} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Java </span>
                                    <span className="skill"> <Skillset value={languageValues.Java} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> AngularJS</span>
                                    <span className="skill"> <Skillset value={languageValues.AngularJs} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Python</span>
                                    <span className="skill"> <Skillset value={languageValues.Python} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> JavaScript</span>
                                    <span className="skill"> <Skillset value={languageValues.JavaScript} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> HTML</span>
                                    <span className="skill"> <Skillset value={languageValues.HTML} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Bootstrap </span>
                                    <span className="skill"> <Skillset value={languageValues.Bootstrap} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> MVC  </span>
                                    <span className="skill"> <Skillset value={languageValues.MVC} /></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6" style={{ minWidth: 300 /* Starts wrapping the skill bar if this isn't here */ }} >
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span className="skillTitle"> C# </span>
                                    <span className="skill"> <Skillset value={languageValues.CSharp} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> React </span>
                                    <span className="skill"> <Skillset value={languageValues.React} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Django </span>
                                    <span className="skill"> <Skillset value={languageValues.Django} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Typescript </span>
                                    <span className="skill"> <Skillset value={languageValues.Typescript} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> CSS </span>
                                    <span className="skill"> <Skillset value={languageValues.CSS} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> SQL </span>
                                    <span className="skill"> <Skillset value={languageValues.SQL} /></span>
                                </li>
                                <li className="listStyle">
                                    <span className="skillTitle"> Domain Driven Design </span>
                                    <span className="skill"> <Skillset value={languageValues.DomainDrivenDesign} /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <hr className="sectionLine" />
                    <br />
                    <h3 className="headerStyle">
                        Tools
                    </h3>
                    <div className="row">
                        <div className="col-xs-9 col-sm-9 col-md-6 col-lg-6 col-xl-6" style={{ minWidth: 275 /* Strarts wrapping the skill bar if this isn't here */ }}>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> Git </span>
                                    <span className="skill"> <Skillset value={toolValues.Git} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> CloneZilla </span>
                                    <span className="skill"> <Skillset value={toolValues.CloneZilla} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> SSIS </span>
                                    <span className="skill"> <Skillset value={toolValues.SSIS} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> MS Office </span>
                                    <span className="skill"> <Skillset value={toolValues.MSOffice} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Sublime Text </span>
                                    <span className="skill"> <Skillset value={toolValues.SublimeText} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Virtual Box </span>
                                    <span className="skill"> <Skillset value={toolValues.VirtualBox} /></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6" style={{ minWidth: 275 /* Strarts wrapping the skill bar if this isn't here */ }} >
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> Docker </span>
                                    <span className="skill"> <Skillset value={toolValues.Docker} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> FileZilla </span>
                                    <span className="skill"> <Skillset value={toolValues.FileZilla} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> SSMS </span>
                                    <span className="skill"> <Skillset value={toolValues.SSMS} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Notepad++ </span>
                                    <span className="skill"> <Skillset value={toolValues.NotepadPlusPlus} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Visual Studio </span>
                                    <span className="skill"> <Skillset value={toolValues.VisualStudio} /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <hr className="sectionLine" />
                    <br />
                    <h3 className="headerStyle">
                        Other Skills
                    </h3>
                    <div className="row">
                        <div className="col-xs-9 col-sm-9 col-md-6 col-lg-6 col-xl-6" style={{ minWidth: 275 }} /* Strarts wrapping the skill bar if this isn't here */>
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> Linux </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.Linux} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Apache </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.Apache } /></span>
                                </li>
                                <li className="listStyle">
                                    <span> PiHole </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.PiHole} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> NextCloud </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.NextCloud} /></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6" style={{ minWidth: 275 /* Strarts wrapping the skill bar if this isn't here */ }} >
                            <ul className="noBullets">
                                <li className="listStyle">
                                    <span> Bash </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.Bash} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> Home Server </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.HomeServer} /></span>
                                </li>
                                <li className="listStyle">
                                    <span> RSA Encryptions </span>
                                    <span className="skill"> <Skillset value={otherSkillValues.RSAEncryptions} /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
}