import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <span>{`${this.props.item.firstName} `}</span>
                <span>{this.props.item.lastName}</span>
                <button onClick={() => {
                    this.props.hideData(this.props.index);
                }}>Edit</button>
            </div>
            <div className={`show-edit${this.props.index}`} style={{display: "none"}}>
                Hi I am the edit
            </div>    
    );
    }
}
            // <div>
            //     <button onClick={this.props.handleToggle}>Edit</button>
            //     <div className={this.props.toggled ? "show" : "hide"}>
            //         <form onSubmit={this.props.handleSave}>
            //             <input onChange={this.props.handleInput} name="name" value={this.props.input.name} type="text" placeholder="Name" />
            //             <input onChange={this.props.handleInput} name="subtitle" value={this.props.input.subtitle} type="text" placeholder="Subtitle" />
            //             <button type="submit">Save</button>
            //         </form>
            //     </div>
            // </div>


export default ItemComponent;