const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hunterSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isAlive: Boolean,
    bountyAmt: Number,
    skills: [String],
    type: String
})

let HunterModel = mongoose.model("bounty", hunterSchema);
module.exports = HunterModel;