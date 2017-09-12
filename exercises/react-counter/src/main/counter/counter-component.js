import React, { Component } from 'react';

class componentName extends Component {
    render() {
        return (
            <div>
                <div>

                    <div className="counter-wrapper" onClick={this.props.handleRset} >

                        <h1>Counter-mania</h1>
                        <div className="view">{this.props.count}</div>
                        <div className="up-btn">
                            <button className="btn-wrapper" onMouseOver={this.props.handleUp} onMouseOut={this.props.handleOut}>+</button>
                            <button className="btn-wrapper" onMouseOver={this.props.handleDown} onMouseOut={this.props.handleOut}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;