import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Skillset from './skillBar';
import '../css/skills.css';

export default function Skills({ forwardedRef }) {

    // Skills are broken down by each ones name, value, and which column its in. Splitting the arrays makes it easier to organize and scale up

    const languageValues = [
        { name: 'C++', value: 3, col: 1 },
        { name: 'Java', value: 2, col: 1 },
        { name: 'AngularJs', value: 4, col: 1 },
        { name: 'Python', value: 4, col: 1 },
        { name: 'JavaScript', value: 5, col: 1 },
        { name: 'HTML', value: 5, col: 1 },
        { name: 'Bootstrap', value: 3, col: 1 },
        { name: 'MVC', value: 4, col: 1 },
        { name: 'C#', value: 4, col: 2 },
        { name: 'React', value: 3, col: 2 },
        { name: 'Django', value: 3, col: 2 },
        { name: 'TypeScript', value: 5, col: 2 },
        { name: 'CSS', value: 4, col: 2 },
        { name: 'SQL', value: 4, col: 2 },
        { name: 'Domain Driven Design', value: 5, col: 2 }
    ];

    const toolValues = [
        { name: 'Git', value: 3, col: 1 },
        { name: 'CloneZilla', value: 5, col: 1 },
        { name: 'SSIS', value: 4, col: 1 },
        { name: 'MSOffice', value: 5, col: 1 },
        { name: 'Sublime Text', value: 3, col: 1 },
        { name: 'VirtualBox', value: 4, col: 1 },
        { name: 'Docker', value: 2, col: 2 },
        { name: 'FileZilla', value: 5, col: 2 },
        { name: 'SSMS', value: 5, col: 2 },
        { name: 'Notepad++', value: 4, col: 2 },
        { name: 'Visual Studio', value: 5, col: 2 }
    ];


    const otherSkillValues = [
        { name: 'Linux', value: 4, col: 1 },
        { name: 'Apache', value: 2, col: 1 },
        { name: 'PiHole', value: 5, col: 1 },
        { name: 'NextCloud', value: 5, col: 1 },
        { name: 'Bash', value: 5, col: 2 },
        { name: 'Home Server', value: 3, col: 2 },
        { name: 'RSA Encryptions', value: 4, col: 2 }
    ];

    /* Code is repeated for each skill section (Languages, Tools, Other Skills) and creates list item with small icon to symbolize the skill level */

    function renderSkillBar(skillSection) {
        return (
            <ul className="noBullets">
            { skillSection.map(skill => (
                    <li className="listStyle" key={ skill.name }>
                        <span className="skillTitle"> {skill.name} </span>
                        <Skillset className="skill" value={skill.value} />
                    </li>
            ))}
            </ul>
        )
    }

    return (
        <div className="secondBackground" id="skills" ref={forwardedRef}>
            <Container className="containerStyle">
                <Row className="justify-content-md-center">
                    <Col md="12">
                        <h1 className="sectionTitle">Skills</h1>
                        <div className="sectionSubTitle"> "There's always room for improvement no matter what." - Ali Krieger </div>
                        <hr className='horizontalLine' />
                    </Col>
                </Row>
                <h3 className="headerStyle">
                    Languages & Frameworks
                    </h3>
                <Row>
                    <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>
                    
                        { renderSkillBar(languageValues.filter(skill => skill.col === 1)) /* Filters list to get all items in column 1 then passes filtered list to method to be shown */ } 

                    </Col>
                    <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%"  /* Starts wrapping the skill bar if this isn't here */ }}>

                        { renderSkillBar(languageValues.filter(skill => skill.col === 2)) /* Filters list to get all items in column 2 then passes filtered list to method to be shown */ }

                    </Col>
                </Row>
                <br />
                <hr className="sectionLine" />
                <br />
                <h3 className="headerStyle">
                    Tools
                    </h3>
                <Row>
                    <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%"  }}>

                        { renderSkillBar(toolValues.filter(skill => skill.col === 1)) }

                    </Col>
                    <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%" }}>

                        { renderSkillBar(toolValues.filter(skill => skill.col === 2)) }

                    </Col>
                </Row>
                <br />
                <hr className="sectionLine" />
                <br />
                <h3 className="headerStyle">
                    Other Skills
                    </h3>
                <Row className="row">
                    <Col xs={7} sm={7} md={7} lg={6} xl={6} style={{ minWidth: "50%" }}>

                        { renderSkillBar(otherSkillValues.filter(skill => skill.col === 1)) }

                    </Col>
                    <Col xs={5} sm={5} md={5} lg={6} xl={6} style={{ minWidth: "50%" }}>

                        { renderSkillBar(otherSkillValues.filter(skill => skill.col === 2)) }

                    </Col>
                </Row>
            </Container>
        </div>
    );
}