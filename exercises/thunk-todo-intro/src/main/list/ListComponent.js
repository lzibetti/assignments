import React, { Component } from 'react';
import ItemContainer from "./item/ItemContainer";

class ListComponent extends Component {
    genList() {
        return this.props.todos.map((item, index) => {
            return <ItemContainer key={index + item.title} item={item} />
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                {this.genList()}
            </div>
        );
    }
}

export default ListComponent;