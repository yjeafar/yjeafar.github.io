import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import AboutMe from './about-me'
import SiteFooter from './site-footer';
import Welcome from './welcome.js'
import '../css/about-me.css';

export default function AllComponents() {

  // Refs added to get the component's DOM node. The value below gets the height of each ref and adds them up. If the view port is in the range, then add href to the url

  const welcomeRef = useRef(null);

  const aboutMeRef = useRef(null);

  const experienceRef = useRef(null);

  const projectsRef = useRef(null);

  const skillsRef = useRef(null);

  const contactMeRef = useRef(null);

  window.requestAnimationFrame(() => {
    const welcomeComponentHeight = ReactDOM.findDOMNode(welcomeRef.current).clientHeight;
    const aboutMeComponentHeight = ReactDOM.findDOMNode(aboutMeRef.current).clientHeight;
    const experiencesComponentHeight = ReactDOM.findDOMNode(experienceRef.current).clientHeight;
    const projectsComponentHeight = ReactDOM.findDOMNode(projectsRef.current).clientHeight;
    const skillsComponentHeight = ReactDOM.findDOMNode(skillsRef.current).clientHeight;
    const contactMeComponentHeight = ReactDOM.findDOMNode(contactMeRef.current).clientHeight;

    const aboutMeHeight = welcomeComponentHeight + aboutMeComponentHeight;

    const experienceHeight = aboutMeHeight + experiencesComponentHeight; // Need to add components before this one to get true height of component

    const projectsHeight = experienceHeight + projectsComponentHeight; // Adds the two component before it, as well as the projects component, same for below

    const skillsHeight = projectsHeight + skillsComponentHeight;

    const contactMeHeight = skillsHeight + contactMeComponentHeight;

    let timer = null;

    window.addEventListener('scroll', function () {
      if (timer !== null) {
        clearTimeout(timer); // Timer so scroll isn't called multiple times at once
      }
      timer = setTimeout(function () {
        if (window.scrollY >= 0 && window.scrollY < welcomeComponentHeight) { // Gets current viewpoint height and compares, dynamic if component height changes
          window.history.pushState("", "Welcome", "/#"); // Adds to window history so url shows current component, as well as allows user to go back to the previous component
        }
        else if (window.scrollY > welcomeComponentHeight && window.scrollY < aboutMeHeight) { // Gets current viewpoint height and compares, dynamic if component height changes
          window.history.pushState("", "About Me", "/#about-me"); // Adds to window history so url shows current component, as well as allows user to go back to the previous component
        }
        else if (window.scrollY > aboutMeHeight && window.scrollY < experienceHeight) {
          window.history.pushState("", "Experiences", "/#experiences");
        }
        else if (window.scrollY > experienceHeight && window.scrollY < projectsHeight) {
          window.history.pushState("", "Projects", "/#projects");
        }
        else if (window.scrollY > projectsHeight && window.scrollY < skillsHeight) {
          window.history.pushState("", "Skills", "/#skills");
        }
        else if (window.scrollY > skillsHeight && window.scrollY < contactMeHeight) {
          window.history.replaceState("", "Contact Me", "/#contact-me");
        }
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }, 100); // Timer makes sure scroll event is updated once every 100 ms 
    }, false);
  })

  /* Below code mounts all components. Added this component because before, about me was the parent component and it gave me issues with the refs. 
     This way makes more sense logically/programmatically as well. The ref is sent as parameter to child component, which sends back its dom node */
  return (
    <div>
      <Welcome forwardedRef={welcomeRef} /> 
      <AboutMe forwardedRef={aboutMeRef} /> 
      <Experiences forwardedRef={experienceRef} />
      <Projects forwardedRef={projectsRef} />
      <Skills forwardedRef={skillsRef} />
      <ContactMe forwardedRef={contactMeRef} />
      <SiteFooter />
    </div>
  );
}