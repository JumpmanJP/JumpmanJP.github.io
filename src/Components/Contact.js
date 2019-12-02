import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { List, ListItem, ListItemContent } from 'react-mdl';

import profile_pic from '../Assets/profile_pic.png';

class Contact extends Component {
    // COMMENTED OUT CODE: ATTEMPT AT CREATING A WORKING FORM FOR VIEWERS TO EMAIL ME FROM. TURNS OUT I WOULD NEED A BACKEND TO COMPLETE.
// constructor() {
//     super()

//     this.state = {
//         name: '',
//         email: '',
//         message: '',

//     }

// this.handleChange = this.handleChange.bind(this)

// }

// handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value }) //this is an object
// }

    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h1>JP O'Grady</h1>
                    <img 
                        src={profile_pic}
                        alt="avatar"
                        style={{height: '55%', width: '75%', border: '3px solid black'}}
                    />
                        <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am excited and motivated to work for an organization that enables me to contribute value while continuing to grow as a professional and take on opportunities that empower me to continue learning in a field that is hands-on and fast-paced.</h4>
                    </Cell>

                    {/* I can't find a way to move my CONTACT ME section further down the page when looking on a mobile platform. */}
                

                    <Cell col={6}>
                        <h1>Contact Me</h1>
                    <hr/>

                    <div className="contact-list">

                        {/* Attempting to import a simple contact form for my viewers. */}

                        {/* <Form style= {{ width: '600px' }} >
                            <FormGroup>
                                <Label for="name">Full Name:</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email Address:</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message:</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form> */}

                    
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                +1(765)701.0241
                            </ListItemContent>
                        </ListItem>

                        <hr />
                         
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                jp.ogrady06@gmail.com
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

export default Contact;













           