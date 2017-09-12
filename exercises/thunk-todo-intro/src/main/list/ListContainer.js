import React, { Component } from 'react';
import ListComponent from "./ListComponent";
import * as actionCreators from "../../redux/actions/index"
import {loadData} from "../../redux/actions/index";
import {connect} from "react-redux";

class ListContainer extends Component {
    componentDidMount(){
        this.props.loadData()
    }
    filterTodos(){
        return this.props.todos.filter((todo)=>{
            if(this.props.filter === "all") return true;
            if(this.props.filter === 'complete') return todo.completed;
            return !todo.completed;
        })
    }
    render() {
        return (
            <div>
            <ListComponent todos={this.props.todos} />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state;
}

export default connect(mapStateToProps, actionCreators)(ListContainer);