import React from 'react';
import { Box } from '@material-ui/core';
import '../../css/projects.css';


export default function OnlineResume() {

  return (
    <div id="online-resume" style={{ textAlign: "center" }}>
         <h2>
            Online Resume
         </h2>
    <Box m={1} className="projectBorder">
      <p>
        This application that you are currently viewing was brainstormed and created by me. Of course, I went through many different designs before finally settling on
        one that I was happy with and make small tweaks on it here and there. I complete this project from scratch using React, with EmailJs for the contact me form, Material UI
        to make it look pretty, and boostrap for fluidity. I hope you like it, if you have any questions, comments, or recommendations, please leave me a message below! I'm 
        always happy to hear feedback and improve(:
      </p>
    </Box>
    </div>
  );
}