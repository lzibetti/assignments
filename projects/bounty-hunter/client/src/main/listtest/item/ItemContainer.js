import React, { Component } from 'react';

class ItemContainer extends Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            input: {
                firstName: props.item.firstName,
                lastName: props.item.lastName,
                isLiving: props.item.isLiving,
                skills: props.item.skills,
                type: props.item.type
            }
        }
    }
    handleToggle() {
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
                input: {
                    ...prevState.input,
                    [e.target.type === "checkbox" ? e.target.checked : e.target.value]: e.target.value
                }
            }
        })
    }
    handleSave(e) {
        e.preventDefault();
        this.props.editBounty(this.props.index, this.state.input);
        this.handleToggle();

    }    
    render() {
        return (
            <ItemComponent
            input={this.state.input}
            item={this.props.item}
            index={this.props.index}
            editBounty={this.props.editBounty}
            handleToggle={this.handleToggle}
            toggled={this.state.toggled}
            handleInput={this.handleInput}
            handleSave={this.handleSave} />
        )
    }
}

export default ItemContainer;