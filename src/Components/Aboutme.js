import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render () {
        return (
            <div className="aboutme">
                <Grid className="aboutme-grid">
                    <Cell col={6}>half page</Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>
            </div>
        )
    }
}

export default About;