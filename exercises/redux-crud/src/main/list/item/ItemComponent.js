import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.item.name}</h2>
                <h5>{this.props.item.price}</h5>
                <span>{this.props.item.fierce ? "Yes" : "No"}</span>
                <button onClick={() => { this.props.deleteItem(this.props.index) }}>Delete</button>
                <button onClick={this.props.handleToggle}>Edit</button>
                <br/>
                <div className={this.props.toggled ? "show" : "hide"}>
                    <form onSubmit={this.props.handleSubmit}>
                        <input value={this.props.inputs.name} onChange={this.props.handleInput} name="name" type="text" placeholder="Edit Name" />
                        <input value={this.props.inputs.price} onChange={this.props.handleInput} name="price" type="text" placeholder="Edit Price" />
                        <br />
                        <input checked={this.props.inputs.fierce} onChange={this.props.handleInput} name="fierce" type="checkbox" placeholder="Checkmark" />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ItemComponent;