import React from "react";

class ItemComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.subtitle}</p>
                <button onClick={() => { this.props.deleteItem(this.props.index) }}>X</button>
                <button onClick={this.props.handleToggle}>Edit</button>
                <div className= {this.props.toggled ? "show" : "hide"}>
                    <form onSubmit={this.props.handleSave}>
                        <input onChange={this.props.handleInput}name="name"value={this.props.input.name}type="text" placeholder="Name" />
                        <input onChange={this.props.handleInput}name="subtitle"value={this.props.input.subtitle}type="text" placeholder="Subtitle" />
                        <button type="submit">Save</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default ItemComponent;