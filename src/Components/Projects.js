import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';




class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }





toggleCatagories() {

if(this.state.activeTab === 0) {
    return(
        <div className="projects-grid">
        {/* Project 1  */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px' }} >React Project #1</CardTitle>
            <CardText>
                Card text here.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LinkedIn</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
    ) 
} else if (this.state.activeTab === 1) {
    return(
        <div><h1>This is Angular</h1></div>
    )
} else if (this.state.activeTab === 2) {
    return (
        <div><h1>This is API</h1></div>
    )
}
}

render() {
return (
        <div className="catagory-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
         <Tab>React</Tab>
         <Tab>Angular</Tab>
        <Tab>API's</Tab>
        </Tabs>
        
        <Grid >
            <Cell col={12}>
                <div className="content">{this.toggleCatagories()}</div>
            </Cell>
        </Grid>

        </div>
)   
}
}




export default Projects;