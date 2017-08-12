var axios = require("axios");
var url = "https://api.vschool.io/laius/todo/";
var form = document.getElementById("todo-form");
var submit = document.getElementById(submit);

var getAll = function(){
    axios.get(url)
        .then(function(response) {
        console.log(response.data);
})                      // no semi-colon chains the requests
    .catch(function(err){
    console.error(err);
});    
}

var getOne = function(id) {
    axios.get(url + id)
        .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
    console.error(err);
    });
}

var editOne = function(id, todo) {
    axios.put(url + id, todo)
        .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
    console.error(err);
    });
}

var postOne = function(todo) {
    axios.post(url, todo)
        .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
    console.error(err);
    });
}

var deleteOne = function(id) {
    axios.delete(url + id)
        .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
    console.error(err);
    });
}


function formTodo() {
    var item = form.elements["title"].value;
    var descr = form.elements["descr"].value;
    var price = form.elements["price"].value;
    var image = form.getElementById["image"];
    if (form.elements["finished"].checked) {
        document.getElementById('finished').value = true;
    }

    alert("Title: " + title + "\nDescription: " + descr + "\nPicture: " + image + "\nPrice: " + price);
}


form.addEventListener("click", formTodo(submit));


//var todo = {
//    title: "shorts",
//    price: 20,
//    imgUrl: "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fcoursework.vschool.io%2Fcontent%2Fimages%2F2015%2F08%2F381583.jpg"
//}

//postOne(todo);
//getOne("598cde722c425d27974fb3cb");
//deleteOne("598cde722c425d27974fb3cb");
//editOne("598cde842c425d27974fb3cc", {price: 46, title: "back scratcher"});
//getAll();