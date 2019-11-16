import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

import profile_pic from '../Assets/profile_pic.png';

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h1>JP O'Grady</h1>
                    <img 
                        src={profile_pic}
                        alt="avatar"
                        style={{height: '300px', border: '3px solid black'}}
                    />
                        <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am excited and motivated to work for an organization that enables me to contribute value while continuing to grow as a professional and take on opportunities that empower me to continue learning in a field that is hands-on and fast-paced.</h4>
                    </Cell>
                    <Cell col={6}>
                        <h1>Contact Me</h1>
                    <hr/>

                    <div className="contact-list">
                        {/* Attempting to import a simple contact form for my viewers. */}
                        <Form>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Form>

                    
                    
                    

                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;












// Prior Content

                    {/* <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                +1(765)701.0241
                            </ListItemContent>
                        </ListItem>
                         
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                jp.ogrady06@gmail.com
                            </ListItemContent>
                        </ListItem>

                    </List> */}