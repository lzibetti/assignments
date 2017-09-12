import React from "react";
import Link from "./link.js";

class Navbar extends React.Component {
    constructor(){
        super();
        this.navLinks = ["Home", "Milestones", "Story Store"]
    }

genLinks() {
    return this.navLinks.map((navLink)=> {
        return <Link navLink = {navLink}/>
    })
}
    render () {
        return (
            <div className="navbar-wrapper">
                <ul className="navbar-list">
                    <Link link= "Home"></Link>
                    <Link link= "Milestones"></Link>
                    <Link link= "Story Store"></Link>
                </ul>
            </div>
        )
    }
}

export default Navbar;