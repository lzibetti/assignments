import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="description"/>
                    <input type="text" placeholder="price"/>
                    <button type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;