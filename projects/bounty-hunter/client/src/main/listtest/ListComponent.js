import React, { Component } from "react";

class ListComponent extends React.Component {
    render() {
        return (
            <div>
                <div className={`show-data${this.props.index}`}>
                    <span>{`Bounty hunter name ${this.props.item.firstName}`} </span>
                    <span>{this.props.item.lastName}</span>
                    <p>{`${this.props.item.isLiving ? "yes" : "no"}`} <br/> {`I am ${this.props.item.skills}`}</p>
                    <br/>
                    <button onClick={() => {
                        this.props.deleteBounty(this.props.item._id);

                    }}>delete</button>
                    <button onClick={() => {
                        this.props.hideData(this.props.index);
                    }}>Edit</button>
                </div>
                <div className={`show-edit${this.props.index}`} style={{display: "none"}}>
                    Hi I am the edit
                </div>    
            </div>    
        )
    }
}

export default ListComponent;

