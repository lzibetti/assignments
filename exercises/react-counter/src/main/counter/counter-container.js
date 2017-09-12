import React, { Component } from 'react';
import CounterComponent from "./counter-component";

class ConterContainer extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleRset = this.handleRset.bind(this);
        this.handleOut = this.handleOut.bind(this);
    }
    handleUp(){
        this.interval=setInterval(()=>{this.setState((prevState)=>{
                return {
                    count: prevState.count + 1
                }
            })}, 100);
    }
    handleDown(){
        this.interval=setInterval(()=>{this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })}, 100);
    }
    handleOut(){
        clearInterval(this.interval)
    }
    handleRset(e){
        console.log(e.target)
        if(e.target.tagName === "BUTTON") return;
        this.setState(
             { 
                count:  0
            }
        )
        
    }
    render() {
        return (
            <CounterComponent count = {this.state.count} 
                              handleUp = {this.handleUp}
                              handleDown = {this.handleDown}
                              handleRset = {this.handleRset}
                              handleOut = {this.handleOut} />
        );
    }
}

export default ConterContainer;