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
          their win/loss ratio and applied the things we learned in the class to try and come to a conclusion. We were able to find that there is a slight correlation,
          that looked like a bell curve. We concluded that coaches do their best after 4-5 years of coaching, and as they get older, their team's win loss ratio declines.
          Of course, there are many vairables that come into play, but there was a correlation between age and the team's win/loss ratio per season.
        </p>
      </Box>
    </div>
  );
}