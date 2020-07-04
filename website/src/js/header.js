import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterSharp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import resumeIcon from '../media/resume-document.png'
import { Link } from "react-router-dom";
import '../css/header.css'

export default function Header() {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            maxWidth: 1000,
        },
    });

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        
        setValue(newValue);

        console.log(value)
    };

    return (
        <div className="header">
            <header>
                <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="icon label tabs example"
                        >
                            <Tab icon={<HomeIcon />} label="HOME" component={Link} to='/' />
                            <Tab icon={<FaceIcon />} label="ABOUT ME" component={Link} to='/about-me' />
                            <Tab icon={<BusinessCenterIcon />} label="PORTFOLIO" component={Link} to='/portfolio' />
                            <Tab icon={<img src={resumeIcon} />} label="RESUME" component={Link} to='/resume' />
                            <Tab icon={<ContactMailIcon />} label="CONTACT ME" component={Link} to='/contact-me' />
                        </Tabs>
                </Paper>
            </header>
        </div>
    );

}