import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <a href="" className="title">{this.props.link} {this.props.key}</a>
        );
    }
}

export default Link;