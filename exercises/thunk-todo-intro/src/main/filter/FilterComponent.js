import React, { Component } from 'react';

class FilterComponent extends Component {
    render() {
        return (
            <div>
                <select name="filter" id="filter"> onChange={this.props.handleSelect}
                <option value="all">See all</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
                </select>
            </div>
        );
    }
}

export default FilterComponent;