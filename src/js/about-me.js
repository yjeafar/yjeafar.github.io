import React from 'react';
import Experiences from './experiences';
import Projects from './projects';
import ContactMe from './contact-me';
import Skills from './skills'
import NavBar from './navBar';
import { Element } from 'react-scroll';

export default function AboutMe() {

  return (
    <div className="AboutMe">
      <div>Picture of me</div>
      <h1>Hello! I'm Yasser. </h1>
      <div>I work as a software developer that has full stack developer experience. Check out my ever-exapnding portfolio page to see some of my work!
        </div>
      <p>
        I am a currently working as an Application Developer where I help create full stack websites at Blue Cross Blue Shield of Michigan.
        After interning for them in Summer of 2019, they brought me on board to be a full time employee in January 2020. I spend most of my days
        reading or playing with new technologies, fishing, or amateur stargazing. I enjoy helping out anywhere I could and being part of any
        community I can.
        Make it funny too!
      </p>

      <NavBar/> 
    
      <Element id='example-destination' name='example-destination'>
        <Experiences/>
      </Element>
      {/* <Experiences /> */}
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}