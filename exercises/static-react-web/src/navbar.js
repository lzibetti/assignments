import React from "react";

class Navbar extends React.Component{
    render() {
        return (
            <div className="nav-wrapper">
                <ul className="menu-wrapper">
                    <a href=""><li className="menu-item">Home</li></a>
                    <a href=""><li className="menu-item">Support</li></a>
                    <a href=""><li className="menu-item">Help</li></a>
                </ul>
            </div>
        )
    }
 };


 export default Navbar;
