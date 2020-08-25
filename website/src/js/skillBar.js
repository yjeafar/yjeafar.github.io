import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

export default function SkillSet(skills) {

    var skillVal = [] // Holds filled in circles

    var totalVal = [] // Holds empty circles (5 minus filled in circles)

    for (var i = 0; i < skills.value; i++) {
        skillVal.push(' ');
    }

    for (var i = 0; i < (5 - skills.value); i++) {
        totalVal.push(' ');
    }

    return (
        <div className="SkillSet">
            { skillVal.map((value, i) => <FiberManualRecordIcon color="primary" key={i} value={value} />)}
            { totalVal.map((value, i) => <FiberManualRecordOutlinedIcon key = {i} value={value}/>)}
        </div>
    );
}