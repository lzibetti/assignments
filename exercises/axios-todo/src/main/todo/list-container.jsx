import React, { Component } from 'react';
import ListComponent from '../todo/list-component';

class ListContainer extends Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <ListComponent
                 todos = {this.props.todos} />            
            </div>
        );
    }
}


export default ListContainer;