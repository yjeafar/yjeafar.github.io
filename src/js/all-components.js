import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    console.log(aboutMeRef);
    console.log(experienceRef);
    console.log(projectsRef);
    console.log(skillsRef);
    console.log(contactMeRef);

  }, [])

  return (
    <div className="LoadComponents">
      <AboutMe forwardedRef={ aboutMeRef } />
      <Experiences forwardedRef={ experienceRef } />
      <Projects forwardedRef={ projectsRef } />
      <Skills forwardedRef={ skillsRef } />
      <ContactMe forwardedRef={ contactMeRef } />
      <SiteFooter />
    </div>
  );
}