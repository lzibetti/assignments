import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Men from './routes/Men';
import Women from "./routes/Women";
import Cart from './routes/Cart';
import Navbar from "./Navbar/NavbarComponent"

class App extends React.Component {
    render() {
    return (
        <div>
            <h1>The short end of things</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
            <hr/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/men" component={Men}/>
                <Route path="/women" component={Women}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </div>
        )
    }
}

export default App;