import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Button from 'react-bootstrap/Button';

import profile_pic from '../Assets/profile_pic.png';

class Resume extends Component {
    constructor() {
        super();
        // this.download = {
        //     if(onClick == true) {

        //     }

        // }
    }



    render() {
        return(
            <div>
                <Grid className="resume-background">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={profile_pic}
                                alt="avatar"
                                style={{height: '366px', border: '3px solid black'}}
                                />
                        </div>

                    <h2 style={{paddingTop: '1em', textAlign: "center"}}> JP O'Grady </h2>
                    {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr> */}
                    <h4 style={{color: 'black', textAlign: 'center'}}> Programmer </h4>
                    <hr style={{borderTop: '3px solid black', width: '100%', textAlign: "center",}}></hr>
                    <h5 style={{textAlign: "center"}} > jp.ogrady06@gmail.com </h5>
                    {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr> */}
                    <h5 style={{textAlign: "center"}}>  +1(765)701.0241 </h5>
                    <hr style={{borderTop: '3px solid black', width: '100%', }}></hr>




                    {/* // Attempting to connect my resume pdf format to the download button and get it to open in another page using target set to _blank */}
                    <div className="resume">
                    <Button onClick={this.download} variant="dark">Download Resume Here</Button>
                    </div>

                    </Cell>






                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                        startYear={2011}
                        endYear={2015}
                        schoolName="Purdue University"
                        schoolDescription="I Majored in Organizational Leadership and Supervsion from the College of Technology with an emphasis on Entrepreneurship. As an undergrad I was a member of Pi Kappa Alpha where I served as the Alumni Relations Chairman. I was also a member of the Boiler Elite Wrestling Club and the St. Thomas Aquinas Boiler Catholics. "
                        />

                        <Education
                        startYear={2019}
                        endYear={2019}
                        schoolName="Eleven Fifty Academy"
                        schoolDescription="As a student at Eleven Fifty I gained a solid foundation of full stack web development. Not only did I learn to code, I learned how to think critically, problem solve outside the box, utilize GitHub and other modern developer tools, research complicated problems and work in an Agile team environment. "
                        />

                        <hr style={{borderTop: '3px solid #833fb2'}} />

                        <h2>Professional Experience</h2>
                        <Experience 
                        startYear={2017}
                        endYear={2019}
                        jobName="English Teacher"
                        jobDescription="I created lesson plans for various skill levels for high school students in Prague, Czech Republic. I taught at Trivis High School just north of old town. Here I learned to communicate effectively with individuals of a diffrent background as well as speak publicly in front of an audience for long periods of time. I gained a lot of confidence in my ability to step outside my comfort zone and work with and around various personalities."
                        />

                        <Experience
                        startYear={2012}
                        endYear={2017}
                        jobName="Sales Representative"
                        jobDescription="Working for Hoosier Refreshments during and just after I graduated from Purdue gave me valuable business experience. I was charged with the responsability to communicate with grocery store managers and order the appropriate inventory to be allocated to the next days merchandisers. I also worked with the merchandisers and store managers to create sales displays throughout the week. "
                        />

                        <Experience
                        startYear={2009}
                        endYear={2015}
                        jobName="Owner/Operator"
                        jobDescription="My sophmore year in high school I created a lawn care business called JP's Grass Squad. I developed clients at a steady rate through my time as an undergrad at Purdue University and eventually expanded to hire employees, invest in larger more industrial equipment and create a web site for marketing purposes. I developed a strong skillset with this experience including time/project management, customer service, strong written and oral communication."
                        />

                        <hr style={{borderTop: '3px solid #833fb2'}} />
                        <h2>Leadership Experience</h2>

                        <Experience
                        startYear={2004}
                        endYear={2010}
                        jobName="Eagle Scout"
                        jobDescription="I became an Eagle Scout my junior year of high school after approximently six years in the program. I learned a broad array of knowledge that concluded with an Eagle Scout Project in my final years. The community service project I developed and imlemented was a landscaping arrangement with the Klondike Summer Recreation baseball fields that I had played at for many years as a child. I raised funding for the project, organized the labor, acquired the materials and got the project approved by the school board."
                        />

                        <hr style={{borderTop: '3px solid #833fb2'}} />
                        <h2>Volunteer Experience</h2>

                        <Experience
                        startYear={2018}
                        endYear={2018}
                        jobName="New Dehli, India"
                        jobDescription="Between traveling from the Czech Republic to Vietnam, I stopped in India to vounteer for three weeks as an english teacher, nurse and orphange care-taker. It was a very humbling experience and I'm happy to say I've done it."
                        />

                        <Experience
                        startYear={2014}
                        endYear={2014}
                        jobName="Pensacola, Florida"
                        jobDescription="I took spring break my junior year at Purdue Univeristy to contribute towards the construction of a home for Habitat for Humanity. I volunteered for this experience with the Boiler Catholics stationed out of St. Thomas Aquinas."
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;