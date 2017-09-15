const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
const hunterRoute = require("./routes/hunter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/hunter", hunterRoute);

mongoose.connect("mongodb://localhost/bounty", () => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
})
