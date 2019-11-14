import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import dirtbikeutah from '../Assets/dirtbikeutah.png';

class About extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>JP O'Grady</h2>
                    <img 
                        src={dirtbikeutah}
                        alt="avatar"
                        style={{height: '350px', border: '3px solid black'}}
                    />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>My hobbies include riding my dirt bike, running, swimming, climbing, golf, reading books and drinking coffee, traveling and connecting with friends and family.</h6>
                    </Cell>
                    <Cell col={6}>
                        <h2>About Me</h2>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent >
                            <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Hello and welcome! My name is JP O'Grady and I am currently enrolled in a fullstack Javascript development course with Eleven Fifty Academy in Fishers, Indiana. I have experience with HTML, CSS, and Javascript. I am a passionate and driven individual that enjoys creating quality code.</h6>
                            </ListItemContent>
                        </ListItem>
                         
                        <ListItem>
                            <ListItemContent >
                            <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>I grew up in West Lafayette, Indiana where I ran a mowing and landscaping business throughout high school and college. During this time I also became an Eagle Scout and graduated from Purdue University. Upon graduation I decided to teach (ESL) English as a Second Language abroad. </h6>
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent >
                            <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>I taught for a year in Prague, Czech Republic and another in Hanoi, Vietnam. It was a good experience and I learned a lot during that time.</h6>
                            </ListItemContent>
                        </ListItem>
                        

                    </List>
                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default About;