import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div className="">
                <h3>{this.props.todo.title}</h3>
            </div>
        );
    }
}

export default ItemComponent;