export function loadData(){
    return {
        type: "LOAD_DATA",
        data: [ 
            {
                name: "Laius",
                price: "$40.00",
                fierce: true
            },
            {
                name: "Mike",
                price: "$60.00",
                fierce: false
            },
            {
                name: "Slim",
                price: "$10.00",
                fierce: true
            }
        ] 
    }
}

export function addItem(item){
    return {
        type: "ADD_ITEM",
        item
    }
}

export function editItem(item, index){
    return {
        type: "EDIT_ITEM",
        item,
        index
    }
}

export function deleteItem(index) {
    return {
        type: "DELETE_ITEM",
        index
    }
}
