import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import AboutMe from './about-me'
import SiteFooter from './site-footer';
import '../css/about-me.css';

export default function AllComponents() {

  const experienceRef = useRef(null);

  const aboutMeRef = useRef(null);

  const projectsRef = useRef(null);

  const skillsRef = useRef(null);

  const contactMeRef = useRef(null);

  window.requestAnimationFrame(() => {
    const aboutMeComponentHeight = ReactDOM.findDOMNode(aboutMeRef.current).clientHeight;
    const experiencesComponentHeight = ReactDOM.findDOMNode(experienceRef.current).clientHeight;
    const projectsComponentHeight = ReactDOM.findDOMNode(projectsRef.current).clientHeight;
    const skillsComponentHeight = ReactDOM.findDOMNode(skillsRef.current).clientHeight;
    const contactMeComponentHeight = ReactDOM.findDOMNode(contactMeRef.current).clientHeight;

    const experienceHeight = aboutMeComponentHeight + experiencesComponentHeight;

    const projectsHeight = experienceHeight + projectsComponentHeight;

    const skillsHeight = projectsHeight + skillsComponentHeight;

    const contactMeHeight = skillsHeight + contactMeComponentHeight;

    let timer = null;

    window.addEventListener('scroll', function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        if (window.scrollY >= 0 && window.scrollY < aboutMeComponentHeight) {
          window.history.pushState("", "About Me", "/#");
        }
        else if (window.scrollY > aboutMeComponentHeight && window.scrollY < experienceHeight) {
          window.history.pushState("", "Experiences", "/#experiences");
        }
        else if (window.scrollY > experienceHeight && window.scrollY < projectsHeight) {
          window.history.pushState("", "Projects", "/#projects");
        }
        else if (window.scrollY > projectsHeight && window.scrollY < skillsHeight) {
          // console.log(TabValue.Initial[window.location.hash]);
          window.history.pushState("", "Skills", "/#skills");
        }
        else if (window.scrollY >= skillsHeight && window.scrollY <= contactMeHeight) {
          // console.log(TabValue.Initial[window.location.hash]);
          window.history.replaceState("", "Contact Me", "/#contact-me");
        }
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }, 100);
    }, false);
  })

  return (
    <div className="LoadComponents">
      <AboutMe forwardedRef={aboutMeRef} />
      <Experiences forwardedRef={experienceRef} />
      <Projects forwardedRef={projectsRef} />
      <Skills forwardedRef={skillsRef} />
      <ContactMe forwardedRef={contactMeRef} />
      <SiteFooter />
    </div>
  );
}