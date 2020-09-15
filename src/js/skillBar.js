import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import '../css/skills.css';

export default function SkillSet(skills) {

    var skillVal = [] // Holds filled in circles

    var totalVal = [] // Holds empty circles (5 minus # of filled in circles)

    for (let i = 0; i < skills.value; i++) {
        skillVal.push(' ');
    }

    for (let i = 0; i < (5 - skills.value); i++) {
        totalVal.push(' ');
    }

    return (
        <span className="SkillSet">
            { skillVal.map((value, i) => <FiberManualRecordIcon color="black" key={i} value={value} />)}
            { totalVal.map((value, i) => <FiberManualRecordOutlinedIcon key = {i} value={value}/>)}
        </span>
    );
}