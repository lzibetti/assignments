import React, { Component } from 'react';
import ItemComponent from "./ItemComponent";

class ItemContainer extends Component {
    render() {
        return (
            <div>
                <ItemComponent item={this.props.item}/>
            </div>
        );
    }
}

export default ItemContainer;