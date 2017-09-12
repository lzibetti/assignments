import React, { Component } from 'react';
import FilterComponent from "./FilterComponent"
import {changeFilter} from "../../redux/actions/index";
import {connect} from "react-redux";


class FilterContainer extends Component {
    handleSelect(e){
        this.props.changeFilter(e.target.value);
    }
    render() {
        return (
            <div>
            <FilterComponent handleSelect={this.handleSelect.bind(this)}/>
            </div>
        );
    }
}

export default connect(null, {changeFilter})(FilterContainer);
