import React from 'react';
import { Box } from '@material-ui/core';
import '../../css/projects.css';


export default function URLShortener() {

  return (
    <div id="url-shortener" style={{ textAlign: "center" }}>
        <h2>
          URL Shortener
      </h2>
      <Box m={1} className="projectBorder">
        <p>
          This project was a small website that works like Bitly. I created the project from scratch using VueJs 3.0, NodeJS (Express), and MongoDB.
          I used a library named nanoid to create the unique id for each url and the mongoose package to connect and store the data in the database, which was done in
          Atlas. The user can copy and go to the url that is shortened via the domain name I have. The project is available on my GitHub page and 
          will be hosted on my server soon.
        </p>
      </Box>
    </div>
  );
}