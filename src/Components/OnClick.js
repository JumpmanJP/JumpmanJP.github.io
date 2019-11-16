import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


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

    render() {
        return (
            <div>
                {this.state.on && <h1>onClick Function</h1>}
                <Button onClick={this.toggle} variant="dark">Download Resume Here</Button>
                {/* <button onClick={this.toggle}>Show/Hide</button> */}
            </div>
        );
    }
}

