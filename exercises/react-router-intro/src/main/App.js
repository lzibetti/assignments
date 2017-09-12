import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';

class App extends React.Component {
    render() {
    return (
        <div>
            <h1>Home About Services Business</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
            <hr/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
            </Switch>
        </div>
        )
    }
}

export default App;

