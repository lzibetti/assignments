import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.inputs.name} onChange={this.props.handleInputs} name="name" type="text" placeholder="name" />
                    <input value={this.props.inputs.price} onChange={this.props.handleInputs} name="price" type="text" placeholder="price" />
                    <br/>
                    <input checked={this.props.inputs.fierce} onChange={this.props.handleInputs} name="fierce" type="checkbox" placeholder="fierce" />Y/N
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;