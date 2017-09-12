import React, { Component } from 'react';
import FormComponent from "./FormComponent";

import * as actionCreators from "../../redux/actions/index";
import { connect } from "react-redux";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                price: "",
                fierce: false
            }
        }
        // this.handleInput = this.handleInput.bind(this);
    }
    handleInputs = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.type === "text" ? e.target.value : e.target.checked
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputs);
        this.clearInputs();
    }
    clearInputs = () => {
        this.setState({
            inputs: {
                name: "",
                price: "",
                fierce: false
            }
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <FormComponent
                addItem={this.props.addItem}
                handleInputs={this.handleInputs}
                handleSubmit={this.handleSubmit}
                inputs={this.state.inputs} />
            </div>
        );
    }
}

export default connect(null, actionCreators) (FormContainer);