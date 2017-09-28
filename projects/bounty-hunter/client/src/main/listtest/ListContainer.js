import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions"
import ListComponent from "./ListComponent";

class ListContainer extends React.Component{
    componentDidMount(){
        this.props.getBounties();
    }
    hideData(index) {
        document.querySelector(`.show-data${index}`).style.display = "none";
        document.querySelector(`.show-edit${index}`).style.display = "inline";
    }
    genBounties() {
        return this.props.bounties.map((item, index) => {
            return <ListComponent hideData={this.hideData} deleteBounty={this.props.deleteBounty} editBounty={this.props.editBounty} item={item} index={index} key={item + index}/>
        })
    }
    
    render() {
        return (
            <div>
                {this.genBounties()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(ListContainer);