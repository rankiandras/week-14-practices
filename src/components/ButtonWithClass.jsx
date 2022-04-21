import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0,
            title: {
                main: 'main title',
                sub: 'subtitle'
            },
            countries: []
        }
        console.log('1');
    }

    componentDidMount() {
        console.log('3');
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countriesData => this.setState(
            () => {
                return {countries: countriesData}
            },
            () => console.log(this.state)
        )) 
    }

    render() {
        console.log('2');
        return (
        <div>
            {this.state.key1}
            <button onClick={() => this.setState({ key1: 'clicked'})}>click me</button><br />
            {this.state.key2}
            <button onClick={() => this.setState({ key2: 1})}>Click me</button>
            {/* {<button onClick={() => {
                this.state.key2= 1
                console.log(this.state);
            }}>Click me</button>} */}
            {/* <button onClick={() => {
                    this.setState({ 
                        title: {
                            main: 'h1',
                            sub: 'sub'
                        }
                    })
                    console.log(this.state);
                }}>{this.state.title.main}</button> */}
            <button onClick={() => {
                this.setState(
                    () => {
                        return {
                            title: {
                                main: 'h1',
                                sub: 'string'
                            }
                        }
                    },
                    () => {
                        console.log(this.state);
                    }
                )           
            }}>{this.state.title.main}</button>
            <div className='countries'>
                {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
            </div>
        </div>
    );
  }
}

export default ButtonWithClass