import React from "react";

class Link extends React.Component{
    render() {
        return (
            <a href=""><li className="navbar-item">{this.props.navLink}</li></a>
            <a href=""><li className="navbar-item">Milestones</li></a>
            <a href=""><li className="navbar-item">Story Store</li></a>  
        )
    }
}

export default Link;