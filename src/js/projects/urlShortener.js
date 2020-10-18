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
          This project is still in the works. It will work like bitly and google shortener (before it was discontinued). It will
          allow for the user to put in a full url and it will automatically shortnen it, allowing them to go to that specific url. A link will before
          posted here once I complete the project and it works the way I would like it to.
        </p>
      </Box>
    </div>
  );
}