import React from "react";

class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar-wrapper">
                <ul className="navbar-list">
                    <a href=""><li className="navbar-item">Home</li></a>
                    <a href=""><li className="navbar-item">Milestones</li></a>
                    <a href=""><li className="navbar-item">Story Store</li></a>                
                </ul>
            </div>
        )
    }
}

export default Navbar;