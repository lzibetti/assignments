import React, { Component } from 'react';
import ItemComponent from "./ItemComponent"

import * as actionCreators from "../../../redux/actions/index";
import { connect } from "react-redux";

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            inputs: {
                name: props.items.name,
                price: props.items.price,
                fierce: props.items.fierce
            }
        }
    }
    handleToggle = () => {
        this.setState((prevState) => {
            return {
            ...prevState,
            toggled: !prevState.toggled             
            }
        })
    }
    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.type === "text" ? e.target.value : e.target.checked
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editItem(this.state.inputs, this.props.index);
    }    
    render() {
        return (
            <ItemComponent 
            inputs={this.state.inputs}
            toggled={this.state.toggled}
            handleToggle={this.handleToggle}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            deleteItem={this.props.deleteItem}
            item={this.props.item} 
            index={this.props.index} />
        );
    }
}

const mapStateToProps = function (state) {
    return state;
}
export default connect(mapStateToProps, actionCreators)(ItemContainer);