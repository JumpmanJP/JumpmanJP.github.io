import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Main;