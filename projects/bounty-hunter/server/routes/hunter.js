const express = require("express");
const HunterModel = require("../models/hunter");
const hunterRoute = express.Router();

hunterRoute.route("/")
    .get((req, res) => {
        HunterModel.find(req.query, (err, hunters) => {
            if (err) {
                res.status(500).send(err)
            } else if (hunters.length === 0) {
                res.status(404).send({ message: "NO data", data: null })
            } else {
                res.status(200).send({ message: "GET Successful", data: hunters });
            }
        });
    })
    .post((req, res) => {
        let hunter = new HunterModel(req.body);
        hunter.save((err, hunter) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send({ message: "POST Successful", data: hunter });
            }
        });
    })
// 8013742367  8018124624

hunterRoute.route("/:id")
    .get((req, res) => {
        HunterModel.findById(req.params.id, (err, hunter) => {
            if (err) {
                res.status(500).send(err)
            } else if (hunter === null) {
                res.status(404).send({ message: "ID does not exist", data: null })
            } else {
                res.status(200).send({ message: "GET Successful", data: hunter });
            }
        });
    })
    .put((req, res)=>{
        HunterModel.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, hunter)=>{
            if (err) {
                res.status(500).send(err)
            } else if (hunter === null) {
                res.status(404).send({ message: "ID does not exist", data: null })
            } else {
                res.status(200).send({ message: "EDIT Successful", data: hunter });
            }
        });
    })
    .delete((req, res) => {
        HunterModel.findByIdAndRemove(req.params.id, (err, hunter) => {
            if (err) {
                res.status(500).send(err)
            } else if (hunter === null) {
                res.status(404).send({ message: "ID does not exist", data: null })
            } else {
                res.status(200).send({ message: "DELETE Successful", data: hunter });
            }
        });
    })

module.exports = hunterRoute;