import React, { Component } from 'react';
import GenComponent from "./GenComponent";
import * as actionCreators from "../../../redux/reducers/index";
import { connect } from "react-redux";

class GenContainer extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    genMen() {
        return <GenComponent
            key={index + short.name}
            index={index}
            short={short} />
    }
    render() {
        return (
            <div>
                {this.genMen()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(GenContainer);