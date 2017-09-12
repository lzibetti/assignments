import React, { Component } from 'react';
import ListContainer from './todo/list-container';
import FormContainer from "./form/form-container";
import FormComponent from "./form/form-component";
import axios from 'axios';

const url = "https://api.vschool.io/laius/todo";

class App extends Component {
    constructor(){
        super();
        this.state = {
            todos : []
        }
        this.loadData = this.loadData.bind(this);
        this.postData = this.postData.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    editItem(id) {
        axios.update(url + id, todo)
            .then((response) => {
                this.loadData();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    deleteItem(id) {
        axios.delete(url + id)
            .then((response) => {
                this.loadData();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    postData(id) {
        axios.update(url, todo)
            .then((response) => {
                this.loadData();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    loadData(){
        axios.get(url)
            .then((response) => {
                this.setState({
                    todos : response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    } 
    render() {
        return (
            <div>
                <h1>Workup todo list</h1>
                <FormContainer postData={this.postData} />
                <ListContainer 
                    loadData={this.loadData} 
                    todos={this.state.todos}
                    deleteItem={this.deleteItem}
                    editItem={this.editItem} />
            </div>
        );
    }
}

export default App;