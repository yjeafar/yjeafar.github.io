import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterSharp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link, useHistory } from "react-router-dom";
import '../css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as TabValue from '../enum';
import * as $ from 'jquery'; 

export default function NavBar() {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: 150,
        },
    });
    const classes = useStyles();

    const [value, setValue] = React.useState(TabValue.Initial[window.location.hash]); // Sets tab based on url path (enum holds paths)

    window.addEventListener('hashchange', () => {
        setValue(TabValue.Initial[window.location.hash]) // Add event listener to change tab once user types in url manually
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const history = useHistory();

    $(window).scroll(
        function(){
            if($(this).scrollTop() > 100 && $(this).scrollTop() < 250){
                window.location.hash.replace("#", '', "#projects");
            } else if ($(this).scrollTop() > 250 && $(this).scrollTop() < 500 ) {
                window.location.hash.replace("#experiences");
            } else if ($(this).scrollTop() == 350 && $(this).scrollTop() < 450) {
               // history.push("#projects");
            } else if ($(this).scrollTop() > 450 && $(this).scrollTop() < 550) {
              //  history.push("#skills");
            } else if ($(this).scrollTop() > 550 && $(this).scrollTop() < 650) {
              //  history.push("#contact-me");
            }
        }
    );

    return (
        <div className="header">
                <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            orientation = "vertical"
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="icon label tabs example"
                        >
                            <Tab icon={<HomeIcon />} label="PORTFOLIO" href="#" />
                            <Tab icon={<FaceIcon />} label="EXPERIENCES" href="#experiences" />
                            <Tab icon={<BusinessCenterIcon />} label="PROJECTS" href="#projects" />
                            <Tab icon={<BarChartIcon />} label="SKILLS & INTERESTS" href="#skills" />
                            <Tab icon={<ContactMailIcon />} label="CONTACT ME" href="#contact-me" />
                        </Tabs>
                </Paper>
        </div>
    );
}