//Given a query object and url endpoint, write a function that turns it into a query string:

//query("http://localhost:8080/some/endpoint", {
//    name: "Ash",
//    occupation: "Pokemon Catcher"
//})
//returns "http://localhost:8080/some/endpoint?name=Ash&occupation=Pokemon Catcher"

function objConvert(url, obj) {
    url += "?";
    for (let prop in obj) {
        url += obj + obj[prop];
    }
    return url
}

let objct = {
    name: "Ash",
    occupation: "Pokemon Catcher"
}
console.log(
    objConvert("http://localhost:8080/some/endpoint", objct)
)
