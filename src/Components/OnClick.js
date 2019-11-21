import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

import ReactResume from '../PDF/ReactResume.pdf';


export default class OnClick extends Component {

state = {
    on: false,
}

toggle = () => {
    this.setState({
        on: !this.state.on
    })
}


//Attempt at creating an onCLick function that will fire off an action. I need that action to download my pdf resume to their computer.

// Ultimately this method failed. I could not get my resume to render to the DOM. It was an overly complicated manuver that simply was not necessary. 

    render() {
        return (
            <div>
                {this.state.on && <a href={ReactResume} target="_blank" />}
                <Button onClick={this.toggle} variant="dark">Download Resume Here</Button>
                {/* <button onClick={this.toggle}>Show/Hide</button> */}
            </div>
        );
    }
}

