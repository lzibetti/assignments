import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index"

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                name: "",
                url: ""
            }
        }
    }
    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            console.log(this.state.input)
            return {
                input: {
                    ...prevState.input,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state.input)
        this.clearInput()
    }
    clearInput = () => {
        this.setState({
            input: {
                name: "",
                url: ""    
            }
        })
    }
    render() {
        return (
            <div>
                <FormComponent
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                     />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, actionCreators)(FormContainer);