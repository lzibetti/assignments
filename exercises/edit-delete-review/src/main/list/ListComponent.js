import React, {Component} from "react";
import ItemContainer from "./item/ItemContainer";

class ListComponent extends Component {
    genItems(){
        return this.props.items.map((item, index)=>{
            return <ItemContainer editItem={this.props.editItem}deleteItem={this.props.deleteItem}item={item} key={index + item.name} index={index} />
        })
    }
    render(){
        return(
            <div>
            {this.genItems()}
            </div>
        )
    }
}

export default ListComponent;