import React, { Component } from 'react';
import ListComponent from "./ListComponent";
// import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/index";
import { connect } from "react-redux";

class ListContainer extends Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        console.log(this.props);
        return (
            <ListComponent
            items = {this.props.items} />
        );
    }
}

// const mapDispatchToProps = function (dispatch) {
//     return bindActionCreators(actionCreators, dispatch);
// }
const mapStateToProps = function (state) {
    return state;
}
export default connect(mapStateToProps, actionCreators)(ListContainer);