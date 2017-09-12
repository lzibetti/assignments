import React, { Component } from "react";

class FormComponent extends Component {
    render() {
        return (
            <div className="meme">
                <h1 className="header-wrapper">Meme</h1>
                <form onSubmit={this.props.handleSubmit}>
                <input onChange={this.props.handleInput} value={this.props.input.name} name="name" type="text" placeholder="name"/>
                <input onChange={this.props.handleInput} value={this.props.input.url} name="url" type="text" placeholder="url"/>
                <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;