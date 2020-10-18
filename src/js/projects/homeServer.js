import React from 'react';
import { Box } from '@material-ui/core';
import '../../css/projects.css';


export default function HomeServer() {

  return (
    <div id="home-server" style={{ textAlign: "center" }}>
    <h2>
      Home Server
    </h2>
    <Box m={1} className="projectBorder">
      <p>
        This was something I came up with once I decided to try and make my life more private. It all started when I learned about NAS in my Operating Systems class, which turned into
        me trying to set one up on my raspberry pi. However, I wanted something more powerful so I repurposed the old family pc and made it into a powerful server with many 
        terrabytes of storage (Raid 1 setup). I use Proxmox OS and run VM's, have some docker containers, nextcloud storage (with a plex like application), Zabbix, OpenVPN, and Privoxy. 
        I back it up on multiple disks, and use my raspberry pi to automatically ssh to the server and copy the files in an outside location.
      </p>
    </Box>
  </div>
  );
}