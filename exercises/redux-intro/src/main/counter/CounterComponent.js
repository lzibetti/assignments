import React, { Component } from 'react';

class CounterComponent extends Component {
    render() {
        return (
            <div className="counter">
                <h1 className="header-wrapper" >{this.props.counter}</h1 >
                <button className="counter-wrapper" onClick={()=>{this.props.up(1)}}>UP</button>
                <button className="counter-wrapper" onClick={()=>{this.props.up(-1)}}>DOWN</button>
                <br/>
                <br/>
                <button className="counter-wrapper" onClick={()=>{this.props.up(5)}}>Increase 5</button>
                <button className="counter-wrapper" onClick={()=>{this.props.up(-5)}}>Decrease 5</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onMouseOver={this.props.reset}>Reset</button>
            </div>
        );
    }
}

export default CounterComponent;