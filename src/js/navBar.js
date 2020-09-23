import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
import Scrollspy from 'react-scrollspy';
import { isVisible } from './isVisible';

export default function NavBar() {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            width: 150,
        },
    });
    const classes = useStyles();

    const [value, setValue] = useState(TabValue.Initial[window.location.hash]); // Sets tab based on url path (enum holds paths)

    const [tabSelected, setTabSelected] = useState(true); // Sets tab based on url path (enum holds paths)

    window.addEventListener('hashchange', () => {
        setValue(TabValue.Initial[window.location.hash]) // Add event listener to change tab once user types in url manually
    });

    let timer = null;

    window.addEventListener('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            if (tabSelected) {
                setValue(TabValue.Initial[window.location.hash]); // Add event listener to change tab once user types in url manually
                console.log(TabValue.Initial[window.location.hash]);
                setTabSelected(false);
            }
        }, 500);
    }, false);

    function handleChange(e, newValue) {
        setValue(newValue);
        console.log(value)
        setTabSelected(true);
    }
    // useEffect(() => {
    // function getValue() {
    //         return value;
    // }}, [value])




    return (
        <div className="header">
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    orientation="vertical"
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    style={{ backgroundColor: "#2b262d", color: "#f2ebe5" }}
                >
                    <Tab icon={<HomeIcon />} aria-label="PORTFOLIO" label="PORTFOLIO" href="#" />
                    <Tab icon={<FaceIcon />} aria-label="EXPERIENCES" label="EXPERIENCES" href="#experiences" />
                    <Tab icon={<BusinessCenterIcon />} aria-label="PROJECTS" label="PROJECTS" href="#projects" />
                    <Tab icon={<BarChartIcon />} aria-label="SKILLS" label="SKILLS" href="#skills" />
                    <Tab icon={<ContactMailIcon />} aria-label="CONTACT ME" label="CONTACT ME" href="#contact-me" />
                </Tabs>
            </Paper>
        </div>
    );
}