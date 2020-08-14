import React from 'react';
import Button from '@material-ui/core/Button';
import { Row, Container, Col } from 'react-bootstrap';
import '../css/resume.css';
import Skillset from './skillBar'


export default function Skills() {

    var skillValues = {
        Cplusplus: 3, Java: 2, VirtualBox: 3,
        Git: 2, CSharp: 4, Bootstrap: 3, SQL: 4, AngularJs: 4,
        React: 2, Django: 3, Python: 3, Linux: 4
    };

    console.log(skillValues);

    function downloadPDF() {
        return;
    }

    return (
        <div className="Skills">
            <div>
            <ul>
                <li>Skills:</li>
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
                    <li>Interests: </li>
                </ul>
            </div>
        </div>
    );
}