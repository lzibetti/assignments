const express = require("express");
const hawkRoute = express.Router();
const Database = require("../Database.js")
const hawks = new Database();

hawkRoute.route("/")
    .get((req, res) => {
        let data = hawks.find();
        if (data === undefined) {
            res.status(404).send({ message: "NOT FOUND" })
        } else {
            res.status(200).send({ message: "SUCCESS", data })
        }
    })
    .post((req, res) => {
        let data = hawks.save(req.body)
        if (data === undefined) {
            res.status(404).send({ message: "NOT FOUND" })
        } else {
            res.status(201).send({ message: "POSTED", data })
        }
    })
    .delete((req, res) => {
        let data = hawks.delete(req.params.id)
        if(data === undefined){
            res.status(404).send({message: "NOT FOUND"})
        } else{
            res.status(200).send({message: "DELETED"})
        }
    })
// .put()

module.exports = hawkRoute;