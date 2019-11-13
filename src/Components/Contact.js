import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import profile_pic from '../Assets/profile_pic.png';

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>JP O'Grady</h2>
                    <img 
                        src={profile_pic}
                        alt="avatar"
                        style={{height: '300px', border: '3px solid black'}}
                    />
                        <h6 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am excited and motivated to work for an organization that enables me to contribute value while continuing to grow as a professional and take on opportunities that empower me to continue learning in a field that is hands-on and fast-paced.</h6>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                +1(765)701.0241
                            </ListItemContent>
                        </ListItem>
                         
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px'}}>
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