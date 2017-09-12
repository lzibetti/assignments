const axios = require("axios");
const url = "https://api.vschool.io/laius/todo/";

function setData(todos) {
    return {
        type: "SET_DATA",
        todos
    }
}

export function loadData() {
    return (dispatch) =>
        axios.get(url)
            .then((response) => {
                let todos = response.data;
                dispatch(setData(todos));
            })
            .catch((err) => {
                console.error(err);
            })
}
export function changeFilter(filter){
    return{
        type: "CHANGE_FILTER",
        filter
    }
}