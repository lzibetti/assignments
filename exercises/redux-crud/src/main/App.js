import React, { Component } from 'react';
import ListContainer from "./list/ListContainer"
import FormContainer from "./form/FormContainer"

class App extends Component {
    render() {
        return (
            <div>
                <FormContainer />
                <ListContainer />
            </div>
        );
    }
}

export default App;