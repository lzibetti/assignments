import React, { Component } from 'react';
import GenComponent from "./genComponent";
import * as actionCreators from "../../../redux/actions/index";
import {connect} from "react-redux";

class GenContainer extends Component {
    componentDidMount(){
        this.props.loadData();
    }
    genWomen(){
        return this.props.women.map((short, index)=>{
            return <GenComponent
                key={index + name}
                index={index}
                short={short} />
        })
    }
    render() {
        return (
            <div>
                {this.genWomen()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return state
};

export default connect(mapStateToProps, actionCreators) (GenContainer);