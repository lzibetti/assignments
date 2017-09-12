import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>[this.props.todo.title</h3>
                    <p></p>
                </div>
                <div>
                    <button onClick={() => {this.props.deleteItem(this.></button>
                </div>
                <div>
                    <button onClick={this.props.handleToggle}>EDIT</button>
                </div>
                <div className= {this.props.toggled ? "show" : "hide"}>
                    <form onSubmit={this.props.handleSubmit>
                        <input value={this.props.title} onChange="" name={title} type="text" placeholder="title"/>
                        <input value={this.props.description} onChange="" name={description} type="text" placeholder="description"/>
                        <input value={this.props.price} onChange="" name={price}type="text" placeholder="price"/>
                        <label htmlFor="completed">Completed</label>
                        <input id="completed" checked={this.props.inputs} value={this.props.completed} name={completed} type="text" placeholder="price"/>
                        <button type="submit">SAVE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ItemComponent;