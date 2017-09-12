import React, {Component} from 'react';
import ColorChangeComponent from "./color-change-component/";

class ColorChangeContainer extends Component {
    constructor(){
        super();
        this.state = {
            backgroundColor: "maroon"
        }
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleColorChange(){
        this.setState((prevState)=>{
            return {
                backgroundColor: prevState.backgroundColor === "maroon" ? "orange" : "maroon"
            }
        })
    }
    render(){
        return(
            <ColorChangeComponent
            backgroundColor = {this.state}
            handleClick = {this.handleColorChange}/>
        );
    }
}



export default ColorChangeContainer;