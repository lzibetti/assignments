const Database = require("./database");
const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let bounties = new Database;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, ()=> {})

app.get("/bounty", (req, res)=>{
    let data = bounties.find();
    res.status(200).send({message: "FIND ALL", data})
});

app.get("/bounty/:id", (req, res)=>{
    let data = bounties.findOne(req.params.id);
    res.status(200).send({message: "FIND ONE", data})
});

app.post("/bounty", (req, res)=>{
    let data = bounties.save(req.body);
    res.status(201).send({message: "ADD BOUNTY", data});
});

app.put("/bounty/:id", (req, res)=>{
    let data = bounties.findOneAndUpdate(req.params.id, req.body);
    res.status(200).send({message: "EDIT BOUNTY", data});
});

app.delete("/bounty/:id", (req, res)=>{
    let data = bounties.findOneAndRemove(req.params.id);
    res.status(200).send({message: "DELETE BOUNTY", data});
});