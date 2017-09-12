import React, { Component } from 'react';
import ColorChangeComponent from '../color-changer/color-change-component'

class ListContainer extends Component {
    constructor(){
        super();
        this.state = {
            stylings: [
                {backgroundColor: "#6b076b"},
                {backgroundColor: "#6b076b"},
                {backgroundColor: "#6b076b"},
                {backgroundColor: "#6b076b"},
                {backgroundColor: "#6b076b"},
                {backgroundColor: "#6b076b"}
            ]
        }
        this.changeColor = this.changeColor.bind(this)
    }
    
    changeColor(index){
        this.setState((prevState)=>{
            let newState = {
                ...prevState
            }
            if(prevState.stylings[index].backgroundColor === "#6b076b"){
                newState.stylings[index].backgroundColor = "#14cebd";
                return newState;
            } else {
                newState.stylings[index].backgroundColor = "#6b076b";
                return newState;
            }
        })
    }

    genColorChangers(){
        return this.state.stylings.map((styling, index)=>{
            return <ColorChangeComponent 
                key = {index} 
                styling = {styling} 
                handleClick = {this.changeColor} 
                index = {index}/>
        })
    }
    
    render() {
        return (
            <div className="color-wrapper">
                {this.genColorChangers()}
            </div> 
        );
    }
}

export default ListContainer;