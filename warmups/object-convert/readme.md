Given a query object and url endpoint, write a function that turns it into a query string:

query("http://localhost:8080/some/endpoint", {
    name: "Ash",
    occupation: "Pokemon Catcher"
})
returns "http://localhost:8080/some/endpoint?name=Ash&occupation=Pokemon Catcher"
