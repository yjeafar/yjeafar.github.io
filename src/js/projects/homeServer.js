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
        This was something I came up with once I realized that privacy and security are things that I am passionate about. It all started when I learned about NAS in my
        Operating Systems class, which turned into me trying to set one up on my raspberry pi. However, I wanted something more powerful so I repurposed the old family pc
        and made it into a powerful server with many terabytes of storage (Raid 1 setup). I use Proxmox OS, and have docker containers running Nextcloud and Jellyfin. I also
        run Zabbix, OpenVPN, and Privoxy in their own VM's as well. I back it up on multiple disks, and use my raspberry pi to automatically ssh to the server and copy the
        files to an outside location.
      </p>
    </Box>
  </div>
  );
}