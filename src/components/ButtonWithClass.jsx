import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0
        }
    }

    
    render() {
        return (
        <div>
            {this.state.key1}
            <button onClick={() => this.setState({ key1: 'clicked'})}>click me</button><br />
            {this.state.key2}
            <button onClick={() => this.setState({ key2: 1})}>Click me</button>
        </div>
        )
  }
}

export default ButtonWithClass