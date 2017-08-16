const url = "https://api.vschool.io/ben/todo";

// make call to get all todos
//display each item of the response array

function loadData() {
    // make a get request
    axios.get(url).then((response)=>{
        let todos = response.data
        todos.map((todo)=>{
            // create col
            let col = document.createElement("div");
            col.classList.add("col-sm-3");
            // create title
            let h5 = document.createElement("h5");
            h5.innerHTML = todo.title;
            col.appendChild(h5);
            // create img
            // create price
            // create completed
            // append col to row
            document.getElementById("todos").appendChild(col);
        });
        
        // store data
    })
}

loadData();