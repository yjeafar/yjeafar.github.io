import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterSharp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BarChartIcon from '@material-ui/icons/BarChart';
import '../css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as TabValue from '../enum';


export default function NavBar() {

    // Component is responsible for vertical nav bar on the right side

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: 120
        },
    });
    const classes = useStyles();

    const [value, setValue] = useState(TabValue.Initial[window.location.hash]); // Sets tab based on url path (enum holds paths)

    window.addEventListener('hashchange', () => {
        if (TabValue.Initial[window.location.hash] !== -1) {
            setValue(TabValue.Initial[window.location.hash]) // Add event listener to change tab once user types in url manually
        } else {
            setValue(0) // If in the view of # (picture), then set the tab to About Me
        }
    });

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    return (
        <div className="navBar">
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    orientation="vertical"
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    style={{ backgroundColor: "#2b262d", color: "#f2ebe5" }}
                >
                    <Tab icon={<HomeIcon />} aria-label="ABOUT ME" label="ABOUT ME" href="#about-me" />
                    <Tab icon={<FaceIcon />} aria-label="EXPERIENCES" label="EXPERIENCES" href="#experiences" />
                    <Tab icon={<BusinessCenterIcon />} aria-label="PROJECTS" label="PROJECTS" href="#projects" />
                    <Tab icon={<BarChartIcon />} aria-label="SKILLS" label="SKILLS" href="#skills" />
                    <Tab icon={<ContactMailIcon />} aria-label="CONTACT ME" label="CONTACT ME" href="#contact-me" />
                </Tabs>
            </Paper>
        </div>
    );
}