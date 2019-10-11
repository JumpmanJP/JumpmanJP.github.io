import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

// function Projects (props) {
//     [activeTab, setActiveTab] = useState('');
// }



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
// Make the class component a functional componnent. Also look up super(props)

function Projects() {
    this.state = { activeTab: 0 };
}




toggleCatagories() {

if(this.state.activeTab === 0) {
    return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('}}
        </Card>
        <div><h1>This is React</h1></div>
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
}

return (
    <div>
        </div>
        <div className="catagory-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
         <Tab>React</Tab>
         <Tab>Angular</Tab>
        <Tab>API's</Tab>
        </Tabs>
        
        <section className="projects-grid">
        <Grid className="projects-grid">
            <Cell col={12}>
                <div className="content">{this.toggleCatagories()}</div>
            </Cell>
        </Grid>

    </section>
</div>
)   





export default Projects;