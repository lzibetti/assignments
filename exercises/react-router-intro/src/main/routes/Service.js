import React from 'react';
import data from '../../data';

class Service extends React.Component {
    render() {
    return (
        <div>
            <h4>{data[this.props.match.params.index].name}</h4>
            <h4>{data[this.props.match.params.index].description}</h4>
        </div>
        )
    }
}

export default Service;
