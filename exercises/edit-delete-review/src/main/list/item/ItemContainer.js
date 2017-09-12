import React, { Component } from "react";
import ItemComponent from "./ItemComponent.js";

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            input: {
                name: props.item.name,
                subtitle: props.item.subtitle
            }
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                toggled: !prevState.toggled
            }
        })
    }
    handleInput(e){
        e.persist();
        this.setState((prevState)=>{
            return {
                input: {
                    ...prevState.input,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleSave(e){
        e.preventDefault();
        this.props.editItem(this.props.index, this.state.input);
        this.handleToggle();
    }
    render() {
        return(
            <ItemComponent handleSave={this.handleSave}handleInput={this.handleInput}toggled={this.state.toggled}handleToggle={this.handleToggle}deleteItem={this.props.deleteItem}item={this.props.item} input={this.state.input} index={this.props.index} />
        )
    }
}

export default ItemContainer;