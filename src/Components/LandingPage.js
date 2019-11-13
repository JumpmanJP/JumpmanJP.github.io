import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// import {profile_pic} from '../Assets/profile_pic';




class Landing extends Component {
    render() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img 
                    src="profile_pic"
                    alt="profile_pic"
                    className="profile_pic"
                // ***
                // Attempted to import personal profile picture from Assets folder.
                    // src = {require('./profile_pic.jpg')}
                    // alt = {profile_pic}
                    // className = "profile_pic"
                />
                </Cell>
                <div className="banner-text" >
                    <h1>Web Developer</h1>
                <hr/>

                <p>HTML/CSS  |  Bootstrap  |  JavaScript  |  ReactJS  |  AngularJS  |  TypeScript  |  NodeJS  |  Express  |  Postgress</p>

            <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/jp-o-grady-57408443/" rel="nooperner noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                </a>

                 {/* Github */}
                 <a href="https://github.com/JumpmanJP" rel="nooperner noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                </a>


            </div>


                </div>
            </Grid>
        </div>
    )
    }
}

export default Landing;