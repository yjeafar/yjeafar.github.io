import React, { useRef } from 'react';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import AboutMe from './about-me'
import SiteFooter from './site-footer';
import '../css/about-me.css';
import ReactDOM from 'react-dom';

export default function AllComponents(props) {
  const projectRef = React.createRef();
  console.log(props);
  return (
    <div className="LoadComponents">
      <AboutMe/>
      <Experiences ref={props.experienceRef} />
      <Projects forwardRef={projectRef} />
      <Skills forwardRef={projectRef} />
      <ContactMe forwardRef={projectRef}/>
      <SiteFooter forwardRef={projectRef} />
    </div>
  );
}