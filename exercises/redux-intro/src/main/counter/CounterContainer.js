import React, { Component } from 'react';
import CounterComponent from "./CounterComponent";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/index";
import { connect } from "react-redux";

class CounterContatiner extends Component {
    render() {
        console.log(this.props);
        return (
            <CounterComponent
                counter={this.props.counter}
                up={this.props.up}
//                down={this.props.down}
                reset={this.props.reset} />
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
const mapStateToProps = function (state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContatiner);