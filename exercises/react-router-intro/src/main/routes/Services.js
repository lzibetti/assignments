import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Service from './Service'
import data from '../../data';

class Services extends React.Component {
    genLinks() {
        return data.map((card, index)=> {
          return  <li key={index}><Link to={`/services/${index}`}>{card.name}</Link></li>
        })
    }
    render() {
        console.log(this.props);
    return (
        <div>
            <h1>Services</h1>
                <ul>
                {this.genLinks()}
                </ul>
            <hr/>
            <Switch>
                <Route path="/services/:index" component={Service}/>
            </Switch>
        </div>
        )
    }
}

export default Services;