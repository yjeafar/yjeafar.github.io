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
import { ScrollLink } from 'react-scroll';

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
                            <Tab icon={<HomeIcon />} label="PORTFOLIO" href="#" onClick={() => history.push("#")}/>
                            <Tab icon={<FaceIcon />} label="EXPERIENCES" href="#experiences" onClick={() => history.push("#experiences")}/>
                            <Tab icon={<BusinessCenterIcon />} label="PROJECTS" href="#projects" onClick={() => history.push("#projects")} />
                            <Tab icon={<BarChartIcon />} label="SKILLS & INTERESTS" href="#skills" onClick={() => history.push("#skills")} />
                            <Tab icon={<ContactMailIcon />} label="CONTACT ME" href="#contact-me" onClick={() => history.push("#contact-me")} />
                        </Tabs>
                </Paper>
        </div>
    );
}