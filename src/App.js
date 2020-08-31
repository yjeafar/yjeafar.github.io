import React from 'react';
import AboutMe from './js/about-me';
import Projects from './js/projects';
import ContactMe from './js/contact-me';
import { Route } from 'react-router';
import { Switch } from "react-router-dom";
import NotFound from './js/not-found';
import Experiences from './js/experiences';
import Skills from './js/skills';
import './App.css'




export default function App() {

  return (
    <main>
      <div className="App">
        <Switch>
          <Route path="/" component={AboutMe} exact />
          <Route path="/experiences" component={Experiences} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact-me" component={ContactMe} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  );

}

