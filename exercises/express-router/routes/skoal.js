const express = require("express");
const Database = require("../Database");
const skoalRoutes = express.Router();
const skoal = new Database;

skoalRoutes.route("/")
    .get((req, res)=>{
        let data = skoal.find();
        if(data === undefined){
            res.status(404).send({message: "NOT FOUND"})
        } else {
            res.status(200).send({MESSAGE: "SUCCESS", data})
        }
    })
    .post((req, res)=>{
        let data = skoal.save(req.body);
        if(data === undefined){
            res.status(404).send({message: "NOT FOUND"})
        } else {
            res.status(200).send({message: "POSTED", data})
        }
    })

skoalRoutes.route("/:id")
.delete((req, res)=>{
    let data = skoal.findOneAndRemove(req.params.id)
    if(data === undefined){
        res.status(404).send({message: "NOT FOUND"})
    } else {
        res.status(200).send({message: "REMOVED", data})
    }
})
.put((req, res)=>{
    let data = skoal.findOneAndUpdate(req.params.id, req.body)
    if(data === undefined){
        res.status(404).send({message: "NOT FOUND"})
    } else {
        res.status(200).send({message: "EDITED", data})
    }
})
.get((req, res)=>{
    let data = skoal.findOne(req.params.id)
    if(data === undefined){
        res.status(404).send({message: "NOT FOUND"})
    } else{
        res.status(200).send({ message: "FOUND ONE", data });            
    }
})    
    

module.exports = skoalRoutes;
