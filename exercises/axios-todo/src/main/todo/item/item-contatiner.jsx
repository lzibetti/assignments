import React, { Component } from 'react';

class ItemContainer extends Component {
    constructor(){
        super(props);
        this.state = {
            toggled: false,
            inputs: {
                title: props.todo.title,
                description: props.todo.description,
                price: props.todo.price,
                completed: props.todo.completeed
            }
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.editItem(this.props.todo._id, this.state.inputs);
        this.setState((prevState) => {
            return {
                toggled: !prevState.toggled
            }
        })
    }
    handleToggle(e) {
        this.setState((prevState) => {
            return {
                toggled: !prevState.toggled
            }
        })
    }
    handleInput(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
                }
            }
        })
    }
    render() {
        return (
            <div>
                <ItemComponent
                    toggled={this.state.toggled}
                    todo={this.props.todo}
                    deleteItem={this.props.deleteItem}
                    handleSubmit={this.handleSubmit}
                    handleToggle={this.handleToggle}
                    handleInput={this.handleInput}
                    inputs={this.state.inputs} />
            </div>
        );
    }
}

export default ItemContainer;