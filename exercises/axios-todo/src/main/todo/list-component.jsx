import React, { Component } from 'react';
import ItemComponent from './list-item';

class ListComponent extends Component {
    genTodo(){
        return this.props.todos.map((todo, index) => {
            return <ItemComponent key = {index} todo = {todo} />
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Todo Brotherhood</h1>
                <div className="row">
                    {this.genTodo()}
                </div>      
            </div>
        );
    }
}

export default ListComponent;