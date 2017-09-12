const vitals = require("mongoose");
const Schema = vitals.Schema;

vitals.connect("mongodb://localhost/life");

let lifeSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    interests: [String],
    isAlive: Boolean
})

let LifeModel = vitals.model("life", lifeSchema);

function addLife(vitals){
    let newVitals = new LifeModel(vitals)
    newVitals.save((err, vitals)=>{
        if(err) console.error(err);
        if(vitals === null){
            console.log("NOT FOUND")
        } else {
            console.log(vitals);
        }
    })
}

function getLife(query){
    LifeModel.find(query, (err, vitals)=>{
        if(err) console.error(err);
        if(vitals.length === 0){
            console.log("NOT FOUND")
        } else {
            console.log(vitals);
        }
    })
}

// addLife({
//     name: "Laius",
//     age: 58,
//     gender: "m",
//     interests: ["coding", "music", "serving"],
//     isAlive: true
// })
// addLife({
//     name: "Suzanne",
//     age: 58,
//     gender: "f",
//     interests: ["serving", "family", "tennis"],
//     isAlive: true
// })

// getLife({name:"suzanne"})
// getLife({_id:"3989d3fa219dd3f39bc"})