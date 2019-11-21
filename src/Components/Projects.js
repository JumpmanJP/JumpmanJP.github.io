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
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '276px', background: 
        'url(https://images.unsplash.com/photo-1415356838286-df6fd593e8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80) center / cover' }}>React Project #1</CardTitle>
            <CardText>
                Travel website for reading, writing, updating and deleting reviews on cities. 
            </CardText>
            <CardActions border>
                <Button colored target="_blank" href="https://github.com/JumpmanJP/BlueBadgeProject/tree/master/server">GitHub Server</Button>
                <Button colored target="_blank" href="https://github.com/JumpmanJP/bluebadgeprojectclient">GitHub Client</Button>
                <Button colored target="_blank" href="https://wandur.herokuapp.com/" >Deployed Site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
    ) 
} else if (this.state.activeTab === 1) {
    return(
<div className="projects-grid">
        {/* Project 2  */}
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '225px', background: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1856&q=80) center / cover ' }} >Angular Project #1</CardTitle>
            <CardText>
                A coffee commerce website designed for viewers to read, write, update and delete reviews as well as "purchase" various types of coffee. This project was completed at Eleven Fifty with two other students.
            </CardText>
            <CardActions border>
                <Button colored target="_blank" href="https://github.com/hongek9/RedBadgeProjectServer" >GitHub Server</Button>
                <Button colored target="_blank" href="https://github.com/hongek9/RedBadgeProjectClient" >GitHub Client</Button>
                <Button colored target="_blank" href="https://jce-cupojoy.herokuapp.com/" >Deployed Site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
            )

} else if (this.state.activeTab === 2) {

    return (
<div className="projects-grid">
        {/* Project 3  */}
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '225px', background: 'url(https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/ cover '}} >API Project #1</CardTitle>
            <CardText>
                I created an API receipe search for meals based on breakfast, lunch and dinner. Meals include URL link to their respective websites.
            </CardText>
            <CardActions border>
                <Button colored target="_blank" href="https://github.com/JumpmanJP/API-Proj">GitHub</Button>
                <Button colored target="_blank" href="file:///Users/jpogrady/Desktop/JSAUG2019/javaScriptLibrary/API-Proj/index.html" >Deployed Site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>    )
}
}

// In the code above, I was unable to connect my live API project, or get it to render in the DOM. Viewers can see it on GitHub but not deployed. 

render() {
return (
        <div className="catagory-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
         <Tab>React</Tab>
         <Tab>Angular</Tab>
        <Tab>API</Tab>
        </Tabs>
        
{/* In the styling for height, just below, I need to find a way to have the background colors fill the entire height of any screen. There should be a 'full' or '100%' setting somehow. */}

        <Grid >
            <Cell col={12}>
                <div className="content" style={{ height: '1500px' }}>{this.toggleCatagories()}</div>
            </Cell>
        </Grid>

        </div>
)   
}
}




export default Projects;