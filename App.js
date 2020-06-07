import React, { Component } from "react";
import "./App.css"
import  { Button } from "./Componants/Buttons";
import { Output } from "./Componants/Output";
import { ClearButton } from "./Componants/ClearButton";
import * as math from 'mathjs';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            output: ''
        };
    }

    addToOutput = val => {
        this.setState({
            output:this.state.output + val
        })
    }
    handleEqual = () => {
        this.setState({
            output: math.evaluate(this.state.output)
        })
    }
    render() {
        return <div className="app">
            <div className="calc-wrapper">  
            <Output output={this.state.output}> </Output>
            <div className="row">
                <Button handleClick={this.addToOutput}>7</Button>
                <Button handleClick={this.addToOutput}>8</Button>
                <Button handleClick={this.addToOutput}>9</Button>
                <Button handleClick={this.addToOutput}>/</Button>
            </div>
            <div className="row">
                <Button handleClick={this.addToOutput}>4</Button>
                <Button handleClick={this.addToOutput}>5</Button>
                <Button handleClick={this.addToOutput}>6</Button>
                <Button handleClick={this.addToOutput}>*</Button>
            </div>
            <div className="row">
                <Button handleClick={this.addToOutput}>1</Button>
                <Button handleClick={this.addToOutput}>2</Button>
                <Button handleClick={this.addToOutput}>3</Button>
                <Button handleClick={this.addToOutput}>+</Button>
            </div>
            <div className="row">
                <Button handleClick={this.addToOutput}>.</Button>
                <Button handleClick={this.addToOutput}>0</Button>
                <Button handleClick={() => this.handleEqual()}>=</Button>
                <Button handleClick={this.addToOutput}>-</Button>
            </div>
         <div className="row"> 
         <ClearButton handleClear={() => this.setState({output:''})}>Clear</ClearButton>
          </div>
            </div>

        </div>;
    }
}

export default App;