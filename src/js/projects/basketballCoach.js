import React from 'react';
import { Box } from '@material-ui/core';
import '../../css/projects.css';


export default function BasketballCoaches() {

  return (
    <div id="coach-age-skills" style={{ textAlign: "center" }}>
      <h2>
        Coaching Skill with Age
      </h2>
      <Box m={1} className="projectBorder">
        <p>
          This was a group project final I did for my statistics class. We went through about 20,000+ records of basketball coaches and cross referneced their age to
          their win/loss ratio to and applied the things we learned in the class to try and come to a conclusion. We were able to find that there is a slight correlation,
          that looked like a bell curve. We were able to point out when a coach was in their prime when coaching a team, and the average age of when they were no longer
      performing their best. This project could be found <a href="www.google.com">here.</a>
        </p>
      </Box>
    </div>
  );
}