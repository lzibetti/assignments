import React, { Component } from 'react';
import ItemContainer from "./item/ItemContainer"

class ListComponent extends Component {
    genList() {
        return this.props.items.map((item, index)=>{
            return <ItemContainer key={index + item.name} item={item} index={index} />
        })
    }
    render() {
        return (
            <div className="counter">
                {this.genList()}
            </div>
        );
    }
}

export default ListComponent;