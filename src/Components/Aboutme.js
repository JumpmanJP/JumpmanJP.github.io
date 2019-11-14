import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import dirtbikeutah from '../Assets/dirtbikeutah.png';

class About extends Component {
    render () {
        return (
            <div className="contact-body-about">
                <Grid className="contact-grid-about">
                    <Cell col={6}>
                    <h2>JP O'Grady</h2>
                    <img 
                        src={dirtbikeutah}
                        alt="avatar"
                        style={{height: '350px', border: '3px solid black'}}
                    />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>My hobbies include riding my dirt bike, running, swimming, climbing, golf, reading books and drinking coffee, traveling and connecting with friends and family.</h6>

                        <hr></hr>

                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40068890_1830838120335579_3988984127796805632_o.jpg?_nc_cat=100&_nc_oc=AQmI-o93m3B7V34W2yjDdkCr75_3eOrs5lZ0eTsIOaafIydrRk_jgi_FUA1RalLeV4x0edb0_n__rjgo3Fvyko0N&_nc_ht=scontent-ort2-1.xx&oh=9af9c04f6de79cdc82bce0a8856f8ee8&oe=5E4EF928"
                        alt="avatar"
                        style={{height: '350px', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Volunteering in India was a very intresting experience. I volunteered as a medical nurse, english teacher, and spent time with the children at the orphanage. I was lucky enough to visit the cities of Agra, Jaipur and Richekesh during my spare time.</h6>

                        <hr></hr>

                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/922269_596419273703717_1363281770_o.jpg?_nc_cat=109&_nc_oc=AQmrjrAbfCa7_7I-5HlcxTysRAJRgOsOIvy8g9Ev4Q18yeoVrGQNmN0JumBowz9LCrb65VovDSwSQ_ejH6iCzbLM&_nc_ht=scontent-ort2-1.xx&oh=69e865f76fc2eb71b9290b7ec1b660f2&oe=5E5CFBE7"
                        alt="avatar"
                        style={{height: '350px', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Here I am standing on the left beside my brother, Stephen and grandfather, Jack. Both my brother and I are Eagle Scouts.</h6>

  


                    </Cell>


                    
                    <Cell col={6}>
                        <h2>About Me</h2>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '90%', margin: 'auto', paddingTop: '1em'}}>Hello and welcome! My name is JP O'Grady and I am currently enrolled in a fullstack Javascript development course with Eleven Fifty Academy in Fishers, Indiana. I have experience with HTML, CSS, and Javascript. I am a passionate and driven individual that enjoys creating quality code.</h4>
                            </ListItemContent>
                        </ListItem>
                         
                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '90%', margin: 'auto', paddingTop: '1em'}}>I grew up in West Lafayette, Indiana where I ran a mowing and landscaping business throughout high school and college. During this time I also became an Eagle Scout and graduated from Purdue University. Upon graduation I decided to teach (ESL) English as a Second Language abroad. </h4>
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '90%', margin: 'auto', paddingTop: '1em'}}>I taught for a year in Prague, Czech Republic and another in Hanoi, Vietnam. It was a good experience and I learned a lot during that time.</h4>
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