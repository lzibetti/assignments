import React, { Component } from 'react';
import Link from './link.js';

class Navbar extends Component {
  constructor(){
    super();
    this.links = ["Home", "About", "Contact", "Store", "Resources", "Support"]
  }
  genLinks(){
    return this.links.map((link, index)=>{
      return <Link key = {link + index} link = {link}/>
    })
  }
render() {
    return (
      <div className="Navbar">
        {this.genLinks()}
      </div>
    );
  }
}

export default Navbar;