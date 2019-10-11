import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header-color" title="JP O'Grady" scroll>
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/content">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="JP O'Grady">
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/content">Contact Me</Link>
          </Navigation>
        </Drawer>
      </Layout>
    </div>
  );
}

export default App;
