import React from 'react';
import ListComponent from './list/ListComponent.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: 'name',
                    subtitle: 'subtitle',
                },
                {
                    name: 'name1',
                    subtitle: 'subtitle1',
                },
                {
                    name: 'name2',
                    subtitle: 'subtitle2',
                }
            ]
            }
            this.deleteItem = this.deleteItem.bind(this);
            this.editItem = this.editItem.bind(this);
        }
    deleteItem(index){
        this.setState((prevState)=>{
            let newItems = [...prevState.items];
            newItems.splice(index, 1);
            return {
                items: newItems
            }
        })
    }
    editItem(index, editedItem){
        this.setState((prevState)=>{
            let newItems = [...prevState.items];
            newItems[index] = editedItem;
            return {
                items: newItems
            }
        })
    }
    render() {
        return(
            <ListComponent
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            {...this.state}/>
        )
    }
}

export default App;
