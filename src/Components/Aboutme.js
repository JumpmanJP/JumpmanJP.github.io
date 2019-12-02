import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import AboutmeV2 from './AboutmeV2';

import dirtbikeutah from '../Assets/dirtbikeutah.png';
import dirtbike from '../Assets/dirtbike.png';
import hiking from '../Assets/hiking.png';
import johnlennonwall from '../Assets/johnlennonwall.png';
import OGsibilings from '../Assets/OGsibilings.png';
import mountains from '../Assets/mountains.png';

class About extends Component {
    render () {
        return (
            // <AboutmeV2 />
            // AboutmeV2 is my attempt at creating a carousel of images about myself for my viewers to gain a greater idea of who I am












            <div className="contact-body-about">
                <Grid className="contact-grid-about">
                    <Cell col={4}>
                    <h1>JP O'Grady</h1>
                    <img 
                        src={dirtbikeutah}
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                    />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>My hobbies include riding my dirt bike, running, swimming, climbing, golf, reading books and drinking coffee, traveling and connecting with friends and family.</h6>

                        <hr></hr>

                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/40068890_1830838120335579_3988984127796805632_o.jpg?_nc_cat=100&_nc_oc=AQmI-o93m3B7V34W2yjDdkCr75_3eOrs5lZ0eTsIOaafIydrRk_jgi_FUA1RalLeV4x0edb0_n__rjgo3Fvyko0N&_nc_ht=scontent-ort2-1.xx&oh=9af9c04f6de79cdc82bce0a8856f8ee8&oe=5E4EF928"
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Volunteering in India was a very intresting experience. I volunteered as a medical nurse, english teacher, and spent time with the children at the orphanage. I was lucky enough to visit the cities of Agra, Jaipur and Rishikesh during my spare time.</h6>

                        <hr></hr>

                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/922269_596419273703717_1363281770_o.jpg?_nc_cat=109&_nc_oc=AQmrjrAbfCa7_7I-5HlcxTysRAJRgOsOIvy8g9Ev4Q18yeoVrGQNmN0JumBowz9LCrb65VovDSwSQ_ejH6iCzbLM&_nc_ht=scontent-ort2-1.xx&oh=69e865f76fc2eb71b9290b7ec1b660f2&oe=5E5CFBE7"
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Here I am standing on the left beside my brother, Stephen and grandfather, Jack. Both my brother and I are Eagle Scouts.</h6>

                        <hr></hr>

                    <img
                        src={dirtbike}
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Cainville, Utah</h6>

                        <hr></hr>

                    <img
                        src={OGsibilings}
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>A photo of my brother(left), sister(middle) and myself at the Indianapolis 500 in the summer of 2016.</h6>

                        <hr></hr>

                    <img
                        src={hiking}
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>While I was teaching ESL in Europe, my sister came to visit and we traveled to Charmonix, France and hiked around Mt. Blonc.</h6>


                        <hr></hr>

                    <img
                        src={mountains}
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>The mountains surrounding Mt. Bloc inspire me.</h6>




                        <hr></hr>

                    <img
                        src={johnlennonwall}
                         alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Teaching in Europe afforded my the opportunity to visit popular touist destinations, such as the John Lennon Wall in Prague, Czech Republic.</h6>


                        <hr></hr>

                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/14543705_1110954562323942_6539218037979821042_o.jpg?_nc_cat=102&_nc_oc=AQlYxRNLp-mexK2GvyCCCNiwSPdQCuz2nW81KAI-BBncFAtvyLd6C8KXIVfpiuKBza4tuW2Pmdv07j6OwBCnPVW0&_nc_ht=scontent-ort2-1.xx&oh=c9d19a94023de42f8c1999e3f540f61e&oe=5E4B871F"
                        alt="avatar"
                        style={{height: '7%', width: '75%', border: '3px solid black'}}
                        />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Trolltunga, Norway. Just outside of Bergen, Norway, my Dutch friends and I decided to go camping in the backcountry. It was a spontaneous, yet exhilerating adventure. </h6>

                        

                    </Cell>


                    
                    <Cell col={8}>
                        <h1>About Me</h1>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '80%', margin: 'auto', paddingTop: '1em', alignContent: 'flex-start'}}>Hello and welcome! My name is JP O'Grady and I recently graduated from a full stack Javascript development course with Eleven Fifty Academy in Fishers, Indiana. I have experience building with HTML, CSS, Javascript, NodeJS and express, ReactJS, AngularJS and Typescript. My database experience includes Postgress. I am a passionate and driven individual that enjoys the process of building applications in code.</h4>
                            </ListItemContent>
                        </ListItem>
                         
                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '80%', margin: 'auto', paddingTop: '1em'}}>I grew up in West Lafayette, Indiana where I ran a lawn care business throughout high school and college. During this time I also became an Eagle Scout and graduated from Purdue University. Upon graduation I decided to teach (ESL) English as a Second Language abroad. I taught for a year in Prague, Czech Republic and another in Hanoi, Vietnam. It was a good experience and I learned a lot during that time. </h4>
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent >
                            <h4 style={{ width: '80%', margin: 'auto', paddingTop: '1em'}}>Upon returning home, I sought a new challenge. A friend from Purdue University introduced me to software development. The opportunity to create and build really caught my attention and I took measured steps to begin learning. While I have mostly web development experience at this time, I am in the process of learning python and SQL. These tools appeal to me because I am interested in back end development and working with data. </h4>
                            </ListItemContent>
                        </ListItem>

                        {/* <Cell col={6} style={{alignContent: 'center'}} >
                        <h2>JP O'Grady</h2>
                    <img 
                        src={dirtbikeutah}
                        alt="avatar"
                        style={{height: '350px', border: '3px solid black'}}
                    />
                        <h6 style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>My hobbies include riding my dirt bike, running, swimming, climbing, golf, reading books and drinking coffee, traveling and connecting with friends and family.</h6>

                        <hr></hr>
                            </Cell> */}

                        

                    </List>
                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default About;