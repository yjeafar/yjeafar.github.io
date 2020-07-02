import React from 'react';
import Home from './js/home';
import AboutMe from './js/about-me';
import Portfolio from './js/portfolio';
import Resume from './js/resume';
import ContactMe from './js/contact-me';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom'

export default function Routing() {
    return (
        <main>
            <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact-me" component={ContactMe} />
            </Switch>
            </main>
    );

}