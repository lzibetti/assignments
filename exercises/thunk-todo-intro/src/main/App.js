import React, { Component } from 'react';
import ListContainer from "./list/ListContainer";
import FilterContainer from "./filter/FilterContainer";

class App extends Component {
    render() {
        return (
            <div>
                <ListContainer />
            </div>
        );
    }
}

export default App;