import React from 'react';
import AboutMe from './js/about-me';
import Portfolio from './js/portfolio';
import Resume from './js/resume';
import ContactMe from './js/contact-me';
import { Route } from 'react-router';
import { Switch } from "react-router-dom";
import NotFound from './js/not-found';
import Header from './js/header';
import Experiences from './js/experiences';
import './App.css'



export default function App() {

  return (
    <main>
      <Header/>
      <div className="App">
        <Switch>
          <Route path="/" component={AboutMe} exact />
          <Route path="/experiences" component={Experiences} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact-me" component={ContactMe} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  );

}

