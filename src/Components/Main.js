import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Main;