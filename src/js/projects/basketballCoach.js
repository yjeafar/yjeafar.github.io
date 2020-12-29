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
          This was a group project final I did for my statistics class. Our group of 4 (including me) went through about 20,000+ records of basketball coaches and cross 
          referenced their age to their win/loss ratio and applied the analysis we learned in class to come to a conclusion. We were able to find that there is 
          a slight correlation, that looked like a bell curve. We concluded that coaches do their best after 4-5 years of coaching (this is the peak), and as they get older, 
          their team's win loss ratio declines. Of course, there are many variables that come into play, and although we found a correlation, we could not conclude that there 
          was a causation.
        </p>
      </Box>
    </div>
  );
}