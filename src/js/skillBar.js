import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import '../css/skills.css';

export default function SkillSet(skills) {

    // This method generates the skills page filled in/empty circles

    var skillVal = [] // Holds filled in circles

    var totalVal = [] // Holds empty circles (5 minus # of filled in circles)

    for (let i = 0; i < skills.value; i++) { // This is how many filled in circles there are
        skillVal.push(' ');
    }

    for (let i = 0; i < (5 - skills.value); i++) { // This is how many empty circles there are
        totalVal.push(' ');
    }

    return (
        <span className="SkillSet">
            { skillVal.map((value, i) => <FiberManualRecordIcon key={i} value={value} htmlColor="#945c74" />)}
            { totalVal.map((value, i) => <FiberManualRecordOutlinedIcon key = {i} value={value}/>)}
        </span>
    );
}