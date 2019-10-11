import React from 'react';
import { Grid, Cell } from 'react-mdl';





function Landing() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="Landing-grid">
                <Cell col={12}></Cell>
                <img 
                    src=""
                    alt="profile_pic"
                    className="profile_pic"
                />

                <div className="banner-text" >
                    <h1>Full Stack Web Developer</h1>
                <hr/>

                <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | Postgress</p>

            <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="nooperner noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                </a>

                 {/* Github */}
                 <a href="http://google.com" rel="nooperner noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                </a>


            </div>


                </div>
            </Grid>
        </div>
    )
}

export default Landing;