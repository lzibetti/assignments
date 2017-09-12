import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Display</h1>
            </div>
        );
    }
}

export default ItemComponent;